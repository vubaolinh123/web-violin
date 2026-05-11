import { ProductGridSkeleton } from "@/components/ui/LoadingSkeleton";

export default function ShopLoading() {
  return (
    <div className="min-h-screen bg-charcoal py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-24 mb-10" />
        <ProductGridSkeleton count={9} />
      </div>
    </div>
  );
}
