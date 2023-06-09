import { createSlice } from '@reduxjs/toolkit'

const signinSlice = createSlice({
    name: 'sign',
    initialState: {
        password: '',
        email: ''
    },
    reducers: {
        clog: (state, action) => {
            return state = {
                password: action.payload.password,
                email: action.payload.email
            }
        },
    },
})

const { actions, reducer } = signinSlice

export const { clog } = actions

export default reducer

export const selectclog = (state) => state.sign