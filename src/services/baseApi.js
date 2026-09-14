import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/constants";

export const baseApi = createApi({
  reducerPath: "baseApi",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
  }),

  tagTypes: [
    "User",
    "Connection",
    "Request",
    "Message",
    "Chat",
    "ConnectionRequests",
  ],
  endpoints: () => ({}),
});
