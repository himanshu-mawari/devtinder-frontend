import Skeleton from "./Skeleton";

const ConnectionRequestSkeleton = () => {
  return Array.from({ length: 3 }).map((_, i) => (
    <div  key={i} className="bg-card border border-border w-full p-4 rounded-3xl flex items-start md:items-center gap-4">
      <Skeleton className="w-14 h-14 md:w-16 md:h-16 rounded-full shrink-0" />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-28 md:w-36 rounded-md" />
        </div>

        <div className="flex gap-2 mt-3 md:mt-0">
          <Skeleton className="h-8 w-16 rounded-xl" />
          <Skeleton className="h-8 w-16 rounded-xl" />
        </div>
      </div>
    </div>
  ));
};

export default ConnectionRequestSkeleton;
