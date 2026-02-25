import { createSlice } from "@reduxjs/toolkit";

export const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    addConnection: (state, action) => {
      return action.payload;
    },
    removeConnection: (state, action) => {
      const newArray = state.filter((u) => u._id !== action.payload);
      return newArray;
    },
  },
});

export const { addConnection, removeConnection } = connectionSlice.actions;

export default connectionSlice.reducer;
