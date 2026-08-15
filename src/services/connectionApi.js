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
        url: "user/connections",
      }),
      providesTags:["Connection"],
      transformResponse: (response) => response?.data,
    }),
    getConnectionRequests: builder.query({
      query: () => ({
        url: "user/requests/received",
      }),
      providesTags:["ConnectionRequests"],
      transformResponse: (response) => response?.data,
    }),
    reviewConnectionRequests: builder.mutation({
      query: ({ action, requestId }) => ({
        url: `request/review/${action}/${requestId}`,
        method: "PATCH",
      }),
      invalidatesTags:["Connection" , "ConnectionRequests"]
    }),
  }),
});
export const {
  useSendRequestMutation,
  useGetConnectionsQuery,
  useGetConnectionRequestsQuery,
  useReviewConnectionRequestsMutation,
} = connectionApi;
