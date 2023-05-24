import { apiSlice } from '../../app/api/apiSlice'

export const accountApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAccount: builder.mutation({
            query: credentials => ({
                url: '/user',
                method: 'POST',
                body: { ...credentials }
            })
        }),
    }),
    overrideExisting: false
})

export const {
    useGetAccountMutation
} = accountApiSlice

