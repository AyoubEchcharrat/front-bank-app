// authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from './authActions'
import { getuserProfile } from './getprofileActions'
import { modifyuserProfile } from './modifyprofileActions'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState = {
    loading: false,
    userProfile: {
        email: null,
        firstName: null,
        lastName: null,
    },
    userToken,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken')
            state.loading = false
            state.userProfile = {
                email: null,
                firstName: null,
                lastName: null,
            }
            state.userToken = null
            state.error = null
        },
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userProfile.email = payload.email
            state.userToken = payload.data.data.body.token
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getuserProfile.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getuserProfile.fulfilled]: (state, { payload }) => {
            state.loading = false
            console.log({ payload })
            state.userProfile.firstName = payload.data.body.firstName
            state.userProfile.lastName = payload.data.body.lastName
        },
        [getuserProfile.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [modifyuserProfile.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [modifyuserProfile.fulfilled]: (state, { payload }) => {
            state.loading = false
            console.log({ payload })
            state.userProfile.firstName = payload.data.body.firstName
            state.userProfile.lastName = payload.data.body.lastName
        },
        [modifyuserProfile.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
})

export default authSlice.reducer

export const { logout } = authSlice.actions