import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { socket } from "../utils/socket";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { baseApi } from "../services/baseApi";

const RootLayout = () => {
  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();
  const chatId = useSelector((state) => state.chat.activeChatId);

  useEffect(() => {
    if (!isAuthenticated) return;

    socket.connect();
    const handleConnectionRequest = (newRequest) => {
      dispatch(
        baseApi.util.updateQueryData(
          "getConnectionRequests",
          undefined,
          (draft) => {
            if (!draft.some((r) => r._id === newRequest._id)) {
              draft.push(newRequest);
            }
          },
        ),
      );
    };

    const handleNewChatMessage = (payload) => {
      const isCurrentlyOpen = chatId === payload.chatId;

      dispatch(
        baseApi.util.updateQueryData("getChatList", undefined, (draft) => {
          const chat = draft.find((c) => c._id === payload.chatId);
          if (chat) {
            chat.lastMessage = payload.lastMessage;
            chat.lastMessageAt = payload.lastMessageAt;
            chat.isUnread = isCurrentlyOpen ? false : payload.isUnread;
          }
        }),
      );
    };
    socket.on("connectionRequestReceived", handleConnectionRequest);
    socket.on("newChatMessage", handleNewChatMessage);

    return () => {
      socket.off("connectionRequestReceived", handleConnectionRequest);
      socket.off("newChatMessage", handleNewChatMessage);
      socket.disconnect();
    };
  }, [isAuthenticated]);

  return <Outlet />;
};

export default RootLayout;
