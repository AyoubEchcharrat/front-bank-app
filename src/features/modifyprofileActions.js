import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = 'http://localhost:3001'

export const modifyuserProfile = createAsyncThunk(
    'auth/putprofile',
    async ({ userToken, firstName, lastName }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            }
            const data = await axios.put(
                `${backendURL}/api/v1/user/profile`,
                {
                    'firstName': firstName,
                    'lastName': lastName
                },
                config
            )
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