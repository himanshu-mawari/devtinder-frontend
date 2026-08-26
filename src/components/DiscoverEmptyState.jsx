import { Users } from "lucide-react";

const DiscoverEmptyState = () => {
  return (
    <div className="flex w-full min-h-[60vh] mt-5 2xl:mt-10  mx-auto flex-col items-center justify-center rounded-[2rem] bg-card p-8 text-center shadow-sm sm:p-10">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <Users className="h-9 w-9  stroke-[1.75]" />
      </div>
      <h3 className="mb-2.5 text-xl lg:text-lg 2xl:text-xl font-semibold xl:font-extrabold tracking-tight text-text sm:text-2xl">
        No more developers to discover
      </h3>
      <p className="mb-7 max-w-xs text-sm lg:text-xs 2xl:text-sm  font-normal leading-relaxed text-muted sm:text-base">
        You've seen everyone available for now. Check back later for new
        profiles.
      </p>

      <button
        type="button"
        onClick={() => window.location.reload()}
        className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all  active:scale-95 shadow-sm"
      >
        Refresh
      </button>
    </div>
  );
};

export default DiscoverEmptyState;
