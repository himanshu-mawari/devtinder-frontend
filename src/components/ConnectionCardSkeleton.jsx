import Skeleton from "./Skeleton";

const ConnectionCardSkeleton = () => {
  return Array.from({ length: 3 }).map((_, i) => (
    <div
      key={i}
      className="bg-card border border-border w-full p-4 rounded-3xl flex justify-between items-center"
    >
      <div className="flex gap-3 items-center">
        <Skeleton className="w-14 h-14 md:w-16 md:h-16 rounded-full shrink-0" />

        <div className="space-y-1.5">
          <Skeleton className="h-4 w-28 md:w-36 rounded-md" />
          <Skeleton className="h-3 w-36 md:w-48 rounded-md" />
        </div>
      </div>

      <Skeleton className="w-5 h-5 md:w-6 md:h-6 rounded-full shrink-0" />
    </div>
  ));
};

export default ConnectionCardSkeleton;
