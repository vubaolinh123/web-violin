"use client";

import { useCallback, useSyncExternalStore } from "react";
import { getProductBySlug, type Product } from "@/lib/data/products";

const STORAGE_KEY = "strad-plus-inquiry";

export interface InquiryLine {
  slug: string;
  quantity: number;
}

export interface InquiryItem {
  product: Product;
  quantity: number;
}

const EMPTY: InquiryLine[] = [];
let lines: InquiryLine[] = EMPTY;
let hydrated = false;
const listeners = new Set<() => void>();

function read(): InquiryLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY;
    return parsed.filter(
      (l): l is InquiryLine =>
        typeof l?.slug === "string" &&
        Number.isInteger(l?.quantity) &&
        l.quantity > 0 &&
        !!getProductBySlug(l.slug)
    );
  } catch {
    return EMPTY;
  }
}

function commit(next: InquiryLine[]) {
  lines = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // storage unavailable: the list still works for this page view
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      lines = read();
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  if (!hydrated) {
    hydrated = true;
    lines = read();
  }
  return lines;
}

function getServerSnapshot() {
  return EMPTY;
}

/** Shared list of products a visitor wants to enquire about. */
export function useInquiry() {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const items: InquiryItem[] = current.flatMap((l) => {
    const product = getProductBySlug(l.slug);
    return product ? [{ product, quantity: l.quantity }] : [];
  });
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  const add = useCallback((slug: string) => {
    const existing = lines.find((l) => l.slug === slug);
    commit(
      existing
        ? lines.map((l) => (l.slug === slug ? { ...l, quantity: l.quantity + 1 } : l))
        : [...lines, { slug, quantity: 1 }]
    );
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    commit(
      quantity <= 0
        ? lines.filter((l) => l.slug !== slug)
        : lines.map((l) => (l.slug === slug ? { ...l, quantity } : l))
    );
  }, []);

  const remove = useCallback((slug: string) => {
    commit(lines.filter((l) => l.slug !== slug));
  }, []);

  const clear = useCallback(() => commit(EMPTY), []);

  return { items, count, add, setQuantity, remove, clear };
}
