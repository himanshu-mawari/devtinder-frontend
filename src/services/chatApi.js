import { baseApi } from "../services/baseApi";

export const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChatList: builder.query({
      query: () => ({
        url: "chats",
      }),
      transformResponse: (response) => response?.chatList
    }),
  }),
});

export const { useGetChatListQuery } = chatApi;
