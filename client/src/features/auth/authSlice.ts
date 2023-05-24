import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: null,
        token: null,
        userId: null
    },
    reducers: {
        setCredentials: (state, action) => {
            state.username = action.payload.username
            state.token = action.payload.accessToken
            state.userId = action.payload.userId
        },
        logOut: (state) => {
            state.username = null
            state.token = null
            state.userId = null
        },
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUsername = (state: { auth: { username: string } }) => state.auth.username
export const selectCurrentToken = (state: { auth: { token: string } }) => state.auth.token
export const selectCurrentUserID = (state: { auth: { userId: string } }) => state.auth.userId
