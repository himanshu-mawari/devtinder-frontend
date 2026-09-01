import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState: {activeChatId: null},
    reducers:{
        setActiveChatId: (state , action) =>{
            state.activeChatId = action.payload
        }
    }
})

export default chatSlice.reducer;
export const { setActiveChatId} = chatSlice.actions;