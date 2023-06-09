import { configureStore } from '@reduxjs/toolkit'
/* import authReducer from './features/authSlice' */
import themeReducer from './features/theme'
import clogReducer from './features/signinSlice'
import authReducer from './features/signinCallAPI'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        sign: clogReducer,
        auth: authReducer
    }
})
