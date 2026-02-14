import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "request",
    initialState:null,
    reducers:{
        addConnectionRequests : (state , action) => {
            return action.payload;
        },
        removeConnectionRequests: (state , action) => {
            const newArray = state.filter(r => r._id !== action.payload);
            return newArray;
        }
    }
});

export const { addConnectionRequests , removeConnectionRequests} = requestSlice.actions;
export default requestSlice.reducer;