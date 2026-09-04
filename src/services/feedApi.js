import { baseApi } from "./baseApi";

export const feedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    feed: builder.infiniteQuery({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
          return lastPage?.pagination?.hasMore ? lastPageParam + 1 : undefined;
        },
      },

      query({ pageParam }) {
        return `user/feed?page=${pageParam}&limit=10`;
      },
    }),
  }),
});

export const { useFeedInfiniteQuery } = feedApi;
