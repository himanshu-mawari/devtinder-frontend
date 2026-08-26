import Skeleton from "./Skeleton";

const ProfileSkeleton = () => (
  <div className="relative  flex  flex-col  bg-background text-text">
    <main>
      <section className="mb-6 space-y-4">
        <div className="flex items-center gap-4">
          <Skeleton className="h-20 w-20 md:w-24 md:h-24 xl:w-20 xl:h-20 rounded-full shrink-0" />

          <div className="space-y-2 flex-1">
            <Skeleton className="h-6 md:h-7 2xl:h-6 w-48 rounded-md" />
            <Skeleton className="h-4 w-36 rounded-md" />
            <Skeleton className="h-5 w-28 rounded-full" />
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <Skeleton className="h-4 md:h-5 2xl:h-4 w-full rounded-md" />
          <Skeleton className="h-4 md:h-5 2xl:h-4 w-4/5 rounded-md" />
        </div>

        <div className="w-full sm:w-auto">
          <Skeleton className="h-10 md:h-11 w-full rounded-xl" />
        </div>
      </section>

      <div className="mb-6 rounded-2xl border border-border bg-card p-5 md:p-6 2xl:p-5 shadow-sm space-y-4">
        <Skeleton className="h-3 w-16 rounded-sm mb-4" />
        <div className="space-y-3.5 md:space-y-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-5 w-5 rounded-md shrink-0" />
            <Skeleton className="h-4 w-52 rounded-md" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-5 w-5 rounded-md shrink-0" />
            <Skeleton className="h-4 w-36 rounded-md" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-5 w-5 rounded-md shrink-0" />
            <Skeleton className="h-4 w-32 rounded-md" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Skeleton className="h-3 w-36 rounded-sm" />

        <div className="space-y-2">
          <Skeleton className="h-3 w-10 rounded-sm" />
          <div className="flex flex-wrap gap-2 md:gap-3">
            <Skeleton className="h-7 md:h-8 w-16 rounded-lg" />
            <Skeleton className="h-7 md:h-8 w-20 rounded-lg" />
            <Skeleton className="h-7 md:h-8 w-24 rounded-lg" />
            <Skeleton className="h-7 md:h-8 w-24 rounded-lg" />
            <Skeleton className="h-7 md:h-8 w-20 rounded-lg" />
            <Skeleton className="h-7 md:h-8 w-28 rounded-lg" />
          </div>
        </div>
      </div>

    </main> 
  </div>
);

export default ProfileSkeleton;
