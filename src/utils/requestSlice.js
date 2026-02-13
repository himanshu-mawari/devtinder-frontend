import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "request",
    initialState:null,
    reducers:{
        addConnectionRequests : (state , action) => {
            return action.payload;
        }
    }
});

export const { addConnectionRequests } = requestSlice.actions;
export default requestSlice.reducer;