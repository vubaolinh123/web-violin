import LoadingSkeleton from "@/components/ui/LoadingSkeleton";

export default function ProductLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="h-8 mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <LoadingSkeleton height="600px" />
        <div className="space-y-4">
          <LoadingSkeleton height="2rem" width="40%" />
          <LoadingSkeleton height="3rem" width="80%" />
          <LoadingSkeleton height="1rem" width="60%" />
          <LoadingSkeleton height="2rem" width="30%" />
          <LoadingSkeleton height="3rem" />
          <LoadingSkeleton height="200px" />
        </div>
      </div>
    </div>
  );
}
