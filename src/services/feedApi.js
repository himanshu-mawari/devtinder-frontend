import { baseApi } from "./baseApi";

export const feedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    feed: builder.infiniteQuery({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage,allPages, lastPageParam) => {
          return lastPage?.pagination?.hasMore ? lastPageParam + 1 : undefined;
        },
      },

      query({ pageParam }) {
        console.log("pageParam value:", pageParam, typeof pageParam);
        return `user/feed?page=${pageParam}`;
      },
    }),
  }),
});

export const { useFeedInfiniteQuery } = feedApi;
