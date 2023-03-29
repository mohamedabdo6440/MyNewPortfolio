import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedin: false,
    email: null,
    useName: null,
    userID: null,
    img: null,
    user:false,
}
const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_ACTICE_USER: (state, action) => {
            state.isLoggedin = true 
            state.email = action.payload.email
            state.useName = action.payload.displayName
            state.userID = action.payload.uid
            state.img = action.payload.photoURL
        },
        REMOVE_ACTICE_USER: (state, action) => {
            state.isLoggedin = false
            state.email = null
            state.useName = null
            state.userID = null
            state.img = null
        },
    }
})
export let { SET_ACTICE_USER, REMOVE_ACTICE_USER} = auth.actions
export default auth.reducer