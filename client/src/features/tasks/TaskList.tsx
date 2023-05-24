import { useGetTasksQuery } from './tasksApiSlice'
import Task from './Task'
import styled from 'styled-components'

const TaskWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`

const TaskList = () => {

    const {
        data: tasks,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetTasksQuery('tasks', {
        pollingInterval: 10000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = tasks
        const tableContent =
            ids?.length &&
            ids.map((taskId) => <Task key={taskId} taskId={taskId} />)

        content = (
            <TaskWrapper>
                {tableContent === 0 ? <p>No tasks found</p> : tableContent}

            </TaskWrapper>
        )
    }

    return content
}
export default TaskList