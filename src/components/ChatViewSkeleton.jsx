import React from "react";
import Skeleton from "./Skeleton";

const ChatViewSkeleton = () => (
  <div className="flex flex-col h-full -mx-4 md:-mx-8 overflow-hidden">
    <header className="flex items-center px-4 pb-2 md:pb-3 gap-4 md:gap-6 2xl:px-7 border-b border-border shrink-0 bg-background">
      <Skeleton className="size-5 md:size-9 rounded-full sidebar:hidden shrink-0" />
      
      <div className="flex items-center gap-3">
        <Skeleton className="w-9 h-9 md:w-14 md:h-14 sidebar:w-10 sidebar:h-10 2xl:w-12 2xl:h-12 rounded-full shrink-0" />
        
        <div className="space-y-1.5 min-w-0">
          <Skeleton className="h-4 md:h-5 sidebar:h-4 w-28 md:w-36 rounded-md" />
          <Skeleton className="h-3 md:h-4 sidebar:h-3 w-20 md:w-24 rounded-md" />
        </div>
      </div>
    </header>

    <section className="flex-1 overflow-hidden min-h-0 py-4 md:py-6 px-4 2xl:px-7">
      <div className="flex flex-col justify-end min-h-full space-y-3 md:space-y-5">
        <div className="flex w-full justify-start">
          <Skeleton className="w-1/2 max-w-[60%] h-10 md:h-12 rounded-2xl rounded-bl-none" />
        </div>

        <div className="flex w-full justify-end">
          <Skeleton className="w-2/5 max-w-[60%] h-10 md:h-12 rounded-2xl rounded-br-none" />
        </div>

        <div className="flex w-full justify-start">
          <Skeleton className="w-3/5 max-w-[60%] h-14 md:h-16 rounded-2xl rounded-bl-none" />
        </div>

        <div className="flex w-full justify-end">
          <Skeleton className="w-1/3 max-w-[60%] h-10 md:h-12 rounded-2xl rounded-br-none" />
        </div>
      </div>
    </section>

    <footer className="mt-auto -my-6 px-4 py-3.5 md:px-6 2xl:px-7 bg-background border-t border-border shrink-0">
      <div className="flex items-center gap-4 justify-center">
        <Skeleton className="w-full h-10 md:h-12 rounded-full" />
        <Skeleton className="size-7 rounded-full shrink-0" />
      </div>
    </footer>
  </div>
);

export default ChatViewSkeleton;