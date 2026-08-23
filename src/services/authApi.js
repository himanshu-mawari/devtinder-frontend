import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "signup",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["User"],
    }),
    login: builder.mutation({
      query: (data) => ({        url: "login",        method: "POST",        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        await queryFulfilled;
        dispatch(baseApi.util.resetApiState());
      }, 
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLogoutMutation } =
  authApi;
