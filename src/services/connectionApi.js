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
    getConnections: builder.query({
      query: () => ({
        url: "/user/connections",
      }),
      transformResponse: (response) => response?.data
    }),
    getConnectionRequests: builder.query(
      {
        query: () => ({
          url: "/user/requests/received"
        }),
        transformResponse: (response) => response?.data
      }
    )
  }),
});
export const { useSendRequestMutation , useGetConnectionsQuery , useGetConnectionRequestsQuery} = connectionApi;
