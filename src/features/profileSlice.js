// authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from './authActions'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState = {
    loading: false,
    userToken,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            console.log(payload)
            state.firstName = payload.data.firstName
            state.lastName = payload.data.lastName
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
})
export default authSlice.reducer