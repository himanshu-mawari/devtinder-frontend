import Skeleton from "./Skeleton";

const ChatListSkeleton = () => (
  <div className="space-y-5 overflow-hidden">
    <header className="flex items-center relative">
      <Skeleton className="size-8 rounded-full sidebar:hidden shrink-0" />

      <Skeleton className="h-6 w-32 rounded-md mx-auto sidebar:mx-0" />
    </header>

    <main>
      <Skeleton className="w-full h-9 rounded-xl" />

      <div className="mt-5 md:mt-7">
        <div className="mb-4">
          <Skeleton className="h-5 w-24 rounded-md" />
        </div>

        <div className="divide-y divide-sidebar-border">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 py-3 rounded-xl px-2"
            >
              <Skeleton className="w-14 h-14 rounded-full shrink-0" />

              <div className="flex-1 min-w-0 space-y-2">
                <Skeleton className="h-4 w-32 md:w-40 rounded-md" />

                <Skeleton className="h-3 w-48 md:w-56 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  </div>
);

export default ChatListSkeleton;
