import {
    createSelector,
    createEntityAdapter
} from '@reduxjs/toolkit'
import {  } from '../../app/api/apiSlice'

const tasksAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = tasksAdapter.getInitialState()

export const tasksApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTasks: builder.query({
            query: () => '/tasks',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedTasks = responseData.map(user => {
                    user.id = user._id
                    return user
                })
                return tasksAdapter.setAll(initialState, loadedTasks)
            },
            providesTags: (result) => {
                if (result?.ids) {
                    return [
                        { type: 'Task', id: 'id' },
                        ...result.ids.map(id => ({ type: 'Task', id }))
                    ]
                } else return [{ type: 'Task', id: 'LIST' }]
            }
        }),
        addNewTask: builder.mutation({
            query: initialTask => ({
                url: '/tasks',
                method: 'POST',
                body: {
                    ...initialTask,
                }
            }),
            invalidatesTags: [
                { type: 'Task', id: 'LIST' }
            ]
        }),
        updateTask: builder.mutation({
            query: initialTask => ({
                url: '/tasks',
                method: 'PATCH',
                body: {
                    ...initialTask,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Task', id: arg.id }
            ]
        }),
        deleteTask: builder.mutation({
            query: ({ id }) => ({
                url: '/tasks',
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Task', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetTasksQuery,
    useAddNewTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
} = tasksApiSlice

export const selectTasksResult = tasksApiSlice.endpoints.getTasks.select()

const selectTasksData = createSelector(
    selectTasksResult,
    tasksResult => tasksResult.data // normalized state object with ids & entities
)

export const {
    selectAll: selectAllTasks,
    selectById: selectTaskById,
    selectIds: selectTaskIds
    // Pass in a selector that returns the tasks slice of state
} = tasksAdapter.getSelectors(state => selectTasksData(state) ?? initialState)