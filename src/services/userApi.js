import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: "profile/view",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getUserDetail: builder.query({
      query: ({ userId }) => ({
        url: `user/${userId}`,
      }),
      transformResponse: (response) => response?.data,
    }),
    updateProfile: builder.mutation({
      query: () => ({
        url: "profile/edit",
        method: "PATCH",
      }),
      transformResponse: (response) => response?.data,
    }),
  }),
});

export const { useGetProfileQuery, useGetUserDetailQuery , useUpdateProfileMutation } = userApi;
