import { currentUser, mockChats } from "../data/chatData";
import { shortTimeAgo } from "../utils/dayjs";

import { Search } from "lucide-react";
import { GoArrowLeft } from "react-icons/go";

const ChatList = () => {
  return (
    <div className="space-y-5">
      <header className="flex items-center gap-14">
        <button
          type="button"
          className=" rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors sidebar:hidden"
          aria-label="Go back"
        >
          <GoArrowLeft size={24} />
        </button>
        <h1 className="font-bold text-xl tracking-tight text-slate-900 dark:text-slate-100">
          {currentUser.username}
        </h1>
      </header>

      <main>
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-11 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none text-base rounded-full placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <div className="mt-5">
          <div>
            <h2 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              Messages
            </h2>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {mockChats.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center gap-3 py-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 rounded-lg px-2 transition-colors"
              >
                <div className="shrink-0 relative">
                  <img
                    src={chat.avatar}
                    alt={`${chat.name}'s profile picture`}
                    className="w-14 h-14 object-cover object-top rounded-full"
                  />
                  {chat.isOnline && (
                    <span className="absolute bottom-0 right-0 size-3.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900 dark:text-slate-100 truncate">
                    {chat.name}
                  </p>
                  <div className="flex items-center justify-between text-xs text-text font-semibold">
                    <p className={`truncate pr-2 ${chat.read && "text-muted font-light"}`}>
                      {chat.lastMessage.text}
                    </p>
                    <span className="shrink-0 text-slate-400 font-normal">
                      {shortTimeAgo(chat.lastMessage.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatList;
