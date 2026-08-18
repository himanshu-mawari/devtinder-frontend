import React from "react";
import { useParams } from "react-router-dom";
import { CURRENT_USER_ID, mockMessages, mockChats } from "../data/chatData";
import { GoArrowLeft } from "react-icons/go";
import { LuSendHorizontal } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const ChatView = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const user = mockChats.filter((chat) => chat.userId === userId);
  const { name, avatar, username } = user[0];

  const messages = mockMessages[userId];

  return (
    <div className="flex flex-col h-full  -mx-4 md:-mx-8 ">
      <header className="flex items-center px-4 pb-2 md:pb-3 gap-4 md:gap-6  2xl:px-7    border-b border-border   shrink-0 bg-background">
        <button
          type="button"
          className="p-1 rounded-full hover:bg-accent-hover text-text transition-colors sidebar:hidden shrink-0"
          aria-label="Go back"
          onClick={() => navigate(-1)}
        >
          <GoArrowLeft className="size-5 md:size-9" />
        </button>
        <div className="flex items-center gap-3 ">
          <img
            src={avatar}
            alt={name}
            className="w-9 h-9 md:w-14 md:h-14 sidebar:w-10 sidebar:h-10 2xl:w-12 2xl:h-12 object-cover object-top rounded-full shrink-0"
          />
          <div className="flex flex-col justify-center min-w-0">
            <h1 className="font-semibold text-sm md:text-lg sidebar:text-base text-text truncate leading-tight">
              {name}
            </h1>
            <p className="text-xs md:text-sm sidebar:text-xs text-muted truncate leading-tight mt-0.5">
              {username}
            </p>
          </div>
        </div>
      </header>

      <section className="flex-1 overflow-y-auto min-h-0 py-4 md:py-6 px-4 2xl:px-7">
        <div className="flex flex-col justify-end min-h-full space-y-3 md:space-y-5">
          {messages.map((message) => {
            const isMine = message.senderId === CURRENT_USER_ID;

            return (
              <div
                key={message.id}
                className={`flex w-full ${isMine ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[60%]  rounded-2xl px-4 py-2.5 md:py-3 sidebar:py-2 border ${
                    isMine
                      ? "bg-primary text-primary-foreground border-primary rounded-br-none"
                      : "bg-sidebar-accent text-text border-border rounded-bl-none"
                  }`}
                >
                  <p className="text-sm md:text-base sidebar:text-sm 2xl:text-base leading-relaxed break-words">
                    {message.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="mt-auto -my-6 px-4 py-3.5  md:px-6 2xl:px-7  bg-background border-t border-border shrink-0">
        <form className="flex items-center gap-4 justify-center">
          <input
            type="text"
            placeholder="Message..."
            className="w-full  bg-card text-muted border border-border rounded-full py-2.5 px-5 md:px-8 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <LuSendHorizontal className="text-primary" size={28} />
        </form>
      </footer>
    </div>
  );
};

export default ChatView;
