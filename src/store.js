import { configureStore } from '@reduxjs/toolkit'
/* import authReducer from './features/authSlice' */
import themeReducer from './features/theme'
import authReducer from './features/authSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
    }
}) 
