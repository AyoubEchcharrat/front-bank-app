// authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from './authActions'
import { getuserProfile } from './getprofileActions'
import { modifyuserProfile } from './modifyprofileActions'
import { handlePendingEvent, handleRejectedEvent } from './utils'

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
        refreshUserDatas: (state) => {
            const userInfosInStorage = localStorage.getItem('userInfos')
                ? localStorage.getItem('userInfos')
                : null
            console.log(JSON.parse(userInfosInStorage))
            const infos = JSON.parse(userInfosInStorage)
            if (userInfosInStorage) {
                state.userProfile = {
                    email: infos.email,
                    firstName: infos.firstName,
                    lastName: infos.lastName,
                }
            }
        }
    },
    extraReducers: {
        [loginUser.pending]: handlePendingEvent,
        [loginUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userProfile.email = payload.email
            state.userToken = payload.data.data.body.token
        },
        [loginUser.rejected]: handleRejectedEvent,
        [getuserProfile.pending]: handlePendingEvent,
        [getuserProfile.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userProfile.firstName = payload.data.body.firstName
            state.userProfile.lastName = payload.data.body.lastName
        },
        [getuserProfile.rejected]: handleRejectedEvent,
        [modifyuserProfile.pending]: handlePendingEvent,
        [modifyuserProfile.fulfilled]: (state, { payload }) => {
            state.loading = false
            console.log({ payload })
            state.userProfile.firstName = payload.data.body.firstName
            state.userProfile.lastName = payload.data.body.lastName
        },
        [modifyuserProfile.rejected]: handleRejectedEvent,
    },
})

export default authSlice.reducer

export const { logout } = authSlice.actions
export const { refreshUserDatas } = authSlice.actions

