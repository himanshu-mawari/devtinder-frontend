import { Inbox } from "lucide-react";

const ConnectionRequestEmptyState = () => {
  return (
    <div className="flex w-full min-h-[55vh] mt-5 2xl:mt-10  mx-auto flex-col items-center justify-center rounded-[2rem] bg-card p-8 text-center shadow-sm sm:p-10">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <Inbox className="h-9 w-9  stroke-[1.75]" />
      </div>
      <h3 className="mb-2.5 text-xl lg:text-lg 2xl:text-xl font-semibold xl:font-extrabold tracking-tight text-text sm:text-2xl">
        No pending requests
      </h3>
      <p className="mb-7 max-w-xs text-sm lg:text-xs 2xl:text-sm  font-normal leading-relaxed text-muted sm:text-base">
        New connection requests will show up here.
      </p>
    </div>
  );
};

export default ConnectionRequestEmptyState;
