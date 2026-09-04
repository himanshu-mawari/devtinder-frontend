import { baseApi } from "../services/baseApi";

export const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChatList: builder.query({
      query: () => ({
        url: "chats",
      }),
      transformResponse: (response) => response?.chatList,
    }),

    getChatMessages: builder.infiniteQuery({
      infiniteQueryOptions: {
        initialPageParam: undefined,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
          if (!lastPage?.hasMore) return undefined;
          return lastPage?.messages[0]?._id;
        },
      },

      query({ queryArg, pageParam }) {
        return `chats/${queryArg}/messages${pageParam ? `?before=${pageParam}&limit=20` : ""}`;
      },
    }),

    markChatAsRead: builder.mutation({
      query: (chatId) => ({
        url: `chats/${chatId}/read`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useGetChatListQuery,
  useGetChatMessagesInfiniteQuery,
  useMarkChatAsReadMutation,
} = chatApi;
