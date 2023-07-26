import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: null,
        token: null,
        userId: null,
        profilePicture: null
    },
    reducers: {
        setCredentials: (state, action) => {
            state.username = action.payload.username
            state.token = action.payload.accessToken
            state.userId = action.payload.userId
            state.profilePicture = action.payload.image
        },
        logOut: (state) => {
            state.username = null
            state.token = null
            state.userId = null
            state.profilePicture = null
        },
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUsername = (state: { auth: { username: string } }) => state.auth.username
export const selectCurrentToken = (state: { auth: { token: string } }) => state.auth.token
export const selectCurrentUserID = (state: { auth: { userId: string } }) => state.auth.userId
export const selectCurrentUserImage = (state: { auth: { userImage: string } }) => state.auth.userImage
