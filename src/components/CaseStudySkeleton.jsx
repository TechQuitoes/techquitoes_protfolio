import { motion } from "framer-motion";

const SkeletonCard = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
      {/* Image */}
      <div className="h-64 w-full skeleton" />

      <div className="p-6">
        {/* Category */}
        <div className="h-4 w-24 rounded-full skeleton mb-4" />

        {/* Title */}
        <div className="h-7 w-3/4 rounded skeleton mb-4" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 rounded skeleton" />
          <div className="h-3 rounded skeleton" />
          <div className="h-3 w-2/3 rounded skeleton" />
        </div>

        {/* Button */}
        <div className="h-11 w-32 rounded-full bg-gray-200 animate-pulse mt-6" />
      </div>
    </div>
  );
};

const CaseStudySkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full"
    >
      {/* Tabs Skeleton */}
      <div className="flex flex-wrap gap-3 mb-16">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="h-12 w-36 rounded-full bg-gray-200 animate-pulse"
          />
        ))}
      </div>

      {/* Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </motion.div>
  );
};

export default CaseStudySkeleton;