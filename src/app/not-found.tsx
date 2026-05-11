import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GoldDivider from "@/components/ui/GoldDivider";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <p className="font-mono text-8xl text-gold/20 font-bold select-none">404</p>
        <h1 className="font-display text-4xl text-parchment font-light">Page Not Found</h1>
        <GoldDivider centered width="md" />
        <p className="font-body text-base text-parchment/50 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Perhaps you were looking for an instrument?
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-gold hover:bg-gold-light text-charcoal rounded transition-colors"
          >
            <ArrowLeft size={15} /> Go Home
          </Link>
          <Link
            href="/shop"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium border border-gold/40 hover:border-gold text-gold hover:bg-gold/10 rounded transition-colors"
          >
            Browse Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
