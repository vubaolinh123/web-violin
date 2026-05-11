"use client";

import { useReducer, useEffect, useCallback } from "react";
import type { CartState, CartAction, CartItem } from "@/types/cart";
import type { Product } from "@/types/product";

const CART_STORAGE_KEY = "arco-violins-cart";

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (item) => item.product.id === action.product.id
      );
      const items: CartItem[] = existing
        ? state.items.map((item) =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.items, { product: action.product, quantity: 1 }];
      return computeCart(items);
    }
    case "REMOVE_ITEM": {
      const items = state.items.filter(
        (item) => item.product.id !== action.productId
      );
      return computeCart(items);
    }
    case "UPDATE_QTY": {
      if (action.quantity <= 0) {
        const items = state.items.filter(
          (item) => item.product.id !== action.productId
        );
        return computeCart(items);
      }
      const items = state.items.map((item) =>
        item.product.id === action.productId
          ? { ...item, quantity: action.quantity }
          : item
      );
      return computeCart(items);
    }
    case "CLEAR_CART":
      return { items: [], total: 0, count: 0 };
    default:
      return state;
  }
}

function computeCart(items: CartItem[]): CartState {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  return { items, total, count };
}

const initialState: CartState = { items: [], total: 0, count: 0 };

export function useCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed: CartItem[] = JSON.parse(stored);
        parsed.forEach((item) => {
          for (let i = 0; i < item.quantity; i++) {
            dispatch({ type: "ADD_ITEM", product: item.product });
          }
        });
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  // Persist to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // ignore storage errors
    }
  }, [state.items]);

  const addItem = useCallback((product: Product) => {
    dispatch({ type: "ADD_ITEM", product });
  }, []);

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: "REMOVE_ITEM", productId });
  }, []);

  const updateQty = useCallback((productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QTY", productId, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  return {
    items: state.items,
    total: state.total,
    count: state.count,
    addItem,
    removeItem,
    updateQty,
    clearCart,
  };
}
