import { createSlice } from "@reduxjs/toolkit";


export const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        loading: false
    }, 
    reducers: {
        isLoading: (state)=>{
            state.loading = true
        },
        loadingDone: (state)=>{
            state.loading = false
        }
    }
})


export default loadingSlice.reducer;
export const {isLoading, loadingDone} = loadingSlice.actions;

