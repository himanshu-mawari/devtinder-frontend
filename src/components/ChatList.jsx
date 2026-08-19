import { shortTimeAgo } from "../utils/dayjs";
import { Search } from "lucide-react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useGetChatListQuery } from "../services/chatApi";
import { useGetProfileQuery } from "../services/userApi";

const ChatList = () => {
  const navigate = useNavigate();
  const handleRoute = (userId) => {
    return navigate(`/dm/${userId}`);
  };
  const { data: userData, isLoading: profileLoading } = useGetProfileQuery();
  const { data: chatList, isLoading } = useGetChatListQuery();

  if (isLoading || profileLoading) {
    return <p>loading...</p>;
  }

  const loggedInUserId = userData?._id;

  return (
    <div className="space-y-5">
      <header className="flex items-center relative">
        <button
          type="button"
          className="absolute rounded-full hover:bg-sidebar-accent-hover text-text transition-colors sidebar:hidden shrink-0 z-10"
          aria-label="Go back"
          onClick={() => navigate(-1)}
        >
          <GoArrowLeft size={24} />
        </button>
        <h1 className="font-bold text-xl  sidebar:text-left mx-auto sidebar:mx-0 tracking-tight text-[var(--color-text)] truncate">
          {userData?.username}
        </h1>
      </header>

      <main>
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-5 text-[var(--color-text-muted)] pointer-events-none" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-11 pr-4 py-2 bg-[var(--color-input)] border-none text-sm rounded-xl text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] transition-all"
          />
        </div>

        <div className="mt-5 md:mt-7">
          <div className="mb-4">
            <h2 className="text-base font-semibold tracking-tight text-[var(--color-text)]">
              Messages
            </h2>
          </div>

          <div className="divide-y divide-[var(--sidebar-border)]">
            {chatList.map((chat) => {
              const otherUsersDetail = chat.participants.find(
                (user) => user._id !== loggedInUserId,
              );
              const name =
                otherUsersDetail.firstName + " " + otherUsersDetail.lastName;

              return (
                <div
                  key={chat._id}
                  className="flex items-center gap-3 py-3 cursor-pointer hover:bg-[var(--sidebar-accent-hover)] rounded-xl px-2 transition-colors"
                  onClick={() => handleRoute(otherUsersDetail._id)}
                >
                  <div className="shrink-0 relative">
                    <img
                      src={otherUsersDetail.profilePicture}
                      alt={`${name}'s profile picture`}
                      className="w-14 h-14 object-cover object-top rounded-full"
                    />
                    {chat.isOnline && (
                      <span className="absolute bottom-0 right-0 size-3.5 bg-emerald-500 border-2 border-[var(--color-sidebar)] rounded-full" />
                    )}
                  </div>

                  <div className="flex- 1 min-w-0">
                    <p
                      className={`text-sm truncate ${
                        !chat.read
                          ? "font-semibold text-[var(--color-text)]"
                          : "font-normal text-[var(--color-text)]"
                      }`}
                    >
                      {name}
                    </p>

                    <div className="flex items-center text-sm truncate">
                      <p
                        className="truncate pr-1
                            font-normal text-[var(--color-text-muted)]"
                      >
                        {chat.lastMessage ? `${chat.lastMessage}` : "Say hi 👋"}
                      </p>
                      <div className="flex gap-1 shrink-0">
                        {chat?.lastMessageAt ? (
                          <>
                            <span
                              className={
                                !chat.read
                                  ? "font-semibold text-[var(--color-text)]"
                                  : "font-normal text-[var(--color-text-muted)]"
                              }
                            >
                              ·
                            </span>
                            <span className="shrink-0 font-normal text-[var(--color-text-muted)]">
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
        </div>
      </main>
    </div>
  );
};

export default ChatList;
