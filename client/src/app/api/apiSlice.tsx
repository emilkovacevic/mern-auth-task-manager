import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setCredentials } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState()
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, unknown> = async (args, api, extraOptions) => {

    let result = await baseQuery(args, api, extraOptions)

    // If you want, handle other status codes, too
    if (result?.error?.status === 403) {
        console.log('sending refresh token')

        // send refresh token to get new access token
        const refreshResult = await baseQuery('/auth/refresh-token', api, extraOptions)
        if ('data' in refreshResult) {
            // store the new token
            const { token, refreshToken } = refreshResult.data as { token: string, refreshToken: string }
            api.dispatch(setCredentials({ token, refreshToken }))

            // retry original query with new access token
            result = await baseQuery(args, api, extraOptions)
        } else if ('error' in refreshResult && refreshResult.error.status === 403) {
            refreshResult.error.data = { message: 'Your login has expired.' }
            return refreshResult
        }
    }

    return result
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Task', 'User'],
    endpoints: builder => ({})
})
