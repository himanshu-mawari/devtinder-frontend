import { baseApi } from "../services/baseApi";

export const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChatList: builder.query({
      query: () => ({
        url: "chats",
      }),
      transformResponse: (response) => response?.chatList
    }),
    getChatMessages : builder.query({
      query: (chatId) => ({
        url: `chats/${chatId}/messages`
      }),
      transformResponse: (response) => response?.messages,
      providesTags: (result , error , {chatId}) => [{type: "Message" , id:chatId}]
    })
  }),
});

// need invalidates tag

export const { useGetChatListQuery , useGetChatMessagesQuery} = chatApi;
