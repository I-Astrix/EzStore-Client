import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo:{},
        error: false,
        isFetching: false,
        userExist: false
    },
    reducers: {
        loginStart: (state)=>{
            state.isFetching = true;
        },
        loginSuccess:(state, action)=>{
            state.userExist = action.payload
            state.userExist = true
        },
        loginFailure: (state)=>{
            state.error = true
            state.userExist = false
            state.isFetching  = false
        }
        
    }
})


export const {loginStart, loginSuccess, loginFailure} = userSlice.actions;
export default userSlice.reducer;