import { baseApi } from "../services/baseApi";

export const connectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendRequest: builder.mutation({
      query: ({ status, id }) => ({
        url: `request/send/${status}/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Feed"],
    }),
  }),
});

export const { useSendRequestMutation } = connectionApi;
