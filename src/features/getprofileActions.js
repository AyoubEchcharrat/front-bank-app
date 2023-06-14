import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = 'http://localhost:3001'

export const getuserProfile = createAsyncThunk(
    'auth/getprofile',
    async (userToken, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            }
            const data = await axios.post(
                `${backendURL}/api/v1/user/profile`, {},
                config
            )
            localStorage.setItem('userInfos', JSON.stringify(data.data.body))
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)