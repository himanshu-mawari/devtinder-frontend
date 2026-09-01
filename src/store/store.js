import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../services/baseApi.js";
import chatReducer from "./chatSlice.js";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
