export const SectionSkeleton = () => (
  <div className="py-32 container mx-auto px-4" aria-busy="true" aria-label="Loading section">
    <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
      <div className="h-3 w-32 mx-auto rounded-full skeleton-shimmer" />
      <div className="h-12 w-2/3 mx-auto rounded-lg skeleton-shimmer" />
      <div className="h-4 w-1/2 mx-auto rounded-full skeleton-shimmer" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-72 rounded-2xl skeleton-shimmer border border-white/5" />
      ))}
    </div>
  </div>
);
