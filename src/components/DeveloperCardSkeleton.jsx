import Skeleton from "./Skeleton";
const DeveloperCardSkeleton = () => {
  return (
    <article className="w-full border border-border bg-card p-5 sm:p-6 md:p-8 rounded-3xl mt-5 xl:px-10 xl:py-7 2xl:mt-10">
      {/* Header: Responsive Avatar + User Details */}
      <div className="flex gap-4 md:gap-6 items-start mb-4">
        {/* Responsive Avatar: w-16 h-16 on mobile, w-20 h-20 on md+ */}
        <Skeleton className="w-16 h-16 md:w-20 md:h-20 rounded-full shrink-0" />

        <div className="flex-1 min-w-0 mb-3 md:mb-4 space-y-2">
          {/* Name line */}
          <Skeleton className="h-6 md:h-8 w-1/2 rounded-md" />
          {/* Role line */}
          <Skeleton className="h-4 md:h-5 w-1/3 rounded-md" />
          {/* Location line */}
          <Skeleton className="h-4 md:h-5 w-1/4 rounded-md" />
        </div>
      </div>

      {/* Bio Paragraph Lines (mimicking line-clamp-3) */}
      <div className="space-y-2">
        <Skeleton className="h-4 md:h-5 w-full rounded-md" />
        <Skeleton className="h-4 md:h-5 w-full rounded-md" />
        <Skeleton className="h-4 md:h-5 w-3/4 rounded-md" />
      </div>

      {/* Content Section */}
      <div className="mt-6 space-y-4 md:space-y-5 2xl:space-y-4">
        {/* Stack / Skills Section */}
        <div>
          <Skeleton className="h-3 w-16 rounded-sm mb-2" />
          <div className="flex flex-wrap gap-2 md:gap-3">
            <Skeleton className="h-6 md:h-8 w-20 rounded-full" />
            <Skeleton className="h-6 md:h-8 w-24 rounded-full" />
            <Skeleton className="h-6 md:h-8 w-16 rounded-full" />
          </div>
        </div>

        {/* Interests Section */}
        <div className="pt-1">
          <Skeleton className="h-3 w-20 rounded-sm mb-2" />
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <Skeleton className="h-7 md:h-9 w-48 rounded-full" />
            <Skeleton className="h-7 md:h-9 w-36 rounded-full" />
          </div>
        </div>

        {/* Links Section */}
        <div>
          <Skeleton className="h-3 w-12 rounded-sm mb-2" />
          <div className="flex items-center ml-1 gap-6">
            <Skeleton className="h-5 md:h-6 w-32 rounded-md" />
            <Skeleton className="h-5 md:h-6 w-36 rounded-md" />
          </div>
        </div>

        {/* Action Buttons: Pass & Connect */}
        <div className="flex items-center justify-center md:justify-around gap-4 pt-4 md:pt-6">
          <Skeleton className="h-10 md:h-12 flex-1 md:flex-initial md:w-64 xl:max-w-52 rounded-xl" />
          <Skeleton className="h-10 md:h-12 flex-1 md:flex-initial md:w-64 xl:max-w-52 rounded-xl" />
        </div>
      </div>
    </article>
  );
};

export default DeveloperCardSkeleton;
