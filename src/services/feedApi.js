import { baseApi } from "./baseApi";

export const feedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    feed: builder.query({
      query: () => ({
        url: "/user/feed",
        method: "GET",
      }),
      providesTags:["Feed"]              ,
      transformResponse: (response) => response?.data
    }),
  }),
});

export const { useFeedQuery } = feedApi;
