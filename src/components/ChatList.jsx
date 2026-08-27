import { shortTimeAgo } from "../utils/dayjs";
import { Search } from "lucide-react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useGetChatListQuery } from "../services/chatApi";
import { useGetProfileQuery } from "../services/userApi";
import ChatListSkeleton from "./ChatListSkeleton";
import useErrorHandler from "../hooks/useErrorHandler";
import ErrorState from "../components/ErrorState";
import EmptyChatState from "./EmptyChatState";

const ChatList = () => {
  const navigate = useNavigate();
  const handleRoute = (userId) => {
    return navigate(`/dm/${userId}`);
  };
  const { data: userData, isLoading: profileLoading } = useGetProfileQuery();
  const {
    data: conversations,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useGetChatListQuery();
  const { message, showRetry } = useErrorHandler(error, "messages");

  const loggedInUserId = userData?._id;

  return isLoading || profileLoading ? (
    <ChatListSkeleton />
  ) : isError ? (
    <ErrorState
      message={message}
      showRetry={showRetry}
      onRetry={refetch}
      isRetrying={isFetching}
    />
  ) : (
    <div className="space-y-5 ">
      <header className="flex items-center relative">
        <button
          type="button"
          className="absolute rounded-full hover:bg-sidebar-accent-hover text-text transition-colors sidebar:hidden shrink-0 z-10"
          aria-label="Go back"
          onClick={() => navigate(-1)}
        >
          <GoArrowLeft size={24} />
        </button>
        <h1 className="font-bold text-xl  sidebar:text-left mx-auto sidebar:mx-0 tracking-tight text-text truncate">
          {userData?.username}
        </h1>
      </header>

      <main>
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-5 text-muted pointer-events-none" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-11 pr-4 py-2 bg-input border-none text-sm rounded-xl text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
        </div>

        <div className="mt-5 md:mt-7">
          <div className="mb-4">
            <h2 className="text-base font-semibold tracking-tight text-text">
              Messages
            </h2>
          </div>

          {conversations.length ? (
              <EmptyChatState />
          ) : (
            <div className="divide-y divide-sidebar-border">
              {conversations.map((chat) => {
                const otherUsersDetail = chat.participants.find(
                  (user) => user._id !== loggedInUserId,
                );
                const name =
                  otherUsersDetail.firstName + " " + otherUsersDetail.lastName;

                return (
                  <div
                    key={chat._id}
                    className="flex items-center gap-3 py-3 cursor-pointer hover:bg-sidebar-accent-hover rounded-xl px-2 transition-colors"
                    onClick={() => handleRoute(otherUsersDetail._id)}
                  >
                    <div className="shrink-0 relative">
                      <img
                        src={otherUsersDetail.profilePicture}
                        alt={`${name}'s profile picture`}
                        className="w-14 h-14 object-cover object-top rounded-full"
                      />
                      {chat.isOnline && (
                        <span className="absolute bottom-0 right-0 size-3.5 bg-emerald-500 border-2 border-sidebar rounded-full" />
                      )}
                    </div>

                    <div className="flex- 1 min-w-0">
                      <p
                        className="text-sm truncate 
                          font-normal text-text"
                      >
                        {name}
                      </p>

                      <div className="flex items-center text-sm truncate">
                        <p
                          className="truncate pr-1
                            font-normal text-text-muted"
                        >
                          {chat.lastMessage
                            ? `${chat.lastMessage}`
                            : "Say hi 👋"}
                        </p>
                        <div className="flex gap-1 shrink-0">
                          {chat?.lastMessageAt ? (
                            <>
                              <span
                                className={
                                  !chat.read
                                    ? "font-semibold text-text"
                                    : "font-normal text-text-muted"
                                }
                              >
                                ·
                              </span>
                              <span className="shrink-0 font-normal text-text-muted">
                                {shortTimeAgo(chat.lastMessageAt)}
                              </span>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ChatList;
