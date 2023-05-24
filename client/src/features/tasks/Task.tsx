import { useNavigate } from 'react-router-dom'

import { useGetTasksQuery } from './taskApiSlice'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const Card = styled.div`

  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  

.card-header {
 background-color: ${props => props.theme.colors.primary};
  padding: 10px;
}

.card-title {
  margin: 0;
}

.card-body {
  padding: 10px;
  background-color: ${props => props.theme.colors.secondary};
}

.card-footer {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.primary};
}

.card-text {
  margin: 0;
  font-size: 14px;
}

.description{
    font-size: 1.2rem;
    padding: 10px 0;
}

.button{
    margin: 1rem 0;
    padding: 0 10px ;
}

`

const Task = ({ taskId }) => {
    const { task } = useGetTasksQuery('tasks', {
        selectFromResult: ({ data }) => ({
            task: data?.entities[taskId],
        }),
    })



    const navigate = useNavigate()

    if (task) {
        const createdDate = new Date(task.createdAt).toLocaleString('en-US', {
            day: 'numeric',
            month: 'long',
        })

        const updatedDate = new Date(task.updatedAt).toLocaleString('en-US', {
            day: 'numeric',
            month: 'long',
        })

        const dueDate = new Date(task.dueDate).toLocaleString('en-US', {
            day: 'numeric',
            month: 'long',
        })

        const handleEdit = () => navigate(`/dashboard/tasks/${taskId}`)

        return (
            <Card >
                <div className="card-header">
                    <p>Assigned To: {task.username}</p>
                    <div>
                        <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h3 className="card-title">{task.title}</h3>
                    <p className="card-text description">{task.description}</p>
                </div>
                <div className="card-footer">
                    <p className="card-text">Due date: {dueDate}</p>
                    <p className="card-text">Created at: {createdDate}</p>
                    <p className="card-text">Updated at: {updatedDate}</p>
                    <div>
                        <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
                    </div>
                </div>
                <button className="button" onClick={handleEdit}>
                    Edit
                </button>
            </Card>
        )
    } else return <div>No tasks found {taskId}</div>
}
export default Task

Task.propTypes = {
    taskId: PropTypes.string.isRequired,
}