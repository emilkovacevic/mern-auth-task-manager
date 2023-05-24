import { useEffect } from 'react'
import styled from 'styled-components'
import { Card } from '../../global-styles/component_styles'
import useAuth from '../../hooks/useAuth'
import { useGetAccountMutation } from './accountApiSlice'

const AccountCard = styled(Card)`
padding: 1rem;

.card img {
  float: right;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 20px;
}

.card h2 {
  margin-top: 0;
}

.card button {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
`

function AccountSettings() {
    const { userId } = useAuth()
    const [getAccount, { data, isLoading, error, isError }] = useGetAccountMutation() 

    useEffect(() => {
        console.log('calling getAccount with userId:', userId)
        getAccount({ userId })
       
    }, [userId])


    const userData = data as IUser | undefined

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error | {error?.data?.message}</div>
    }

    const createdAt = new Date(userData?.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })
    
    return (
        <AccountCard>
            <div className="card">
                <img src={userData?.profilePicture} alt={userData?.username} />
                <h2>Account Settings</h2>
                <p>Username: {userData?.username}</p>
                <p>Email: {userData?.email}</p>
                <p>Roles: {userData?.roles?.map(role => <span key={ role }>{ role }</span>)}</p>
                <p>Joined: {createdAt}</p>
                <button>Make Changes</button>
            </div>
        </AccountCard>
    )
}

export default AccountSettings