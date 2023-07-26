import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { useGetAccountMutation } from './accountApiSlice'
import Card from '../../components/Card'

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
        <div className="card card-side bg-base-100 shadow-xl h-full">
            <div className='avatar'><img src={userData?.profilePicture || '/images/defaultUser.jpg'} alt={userData?.username ?? 'name'}/></div>
            <div className="card-body">
                <h2>Account Settings</h2>
                <p>Username: {userData?.username}</p>
                <p>Email: {userData?.email}</p>
                <p>Roles: {userData?.roles?.map(role => <span key={ role }>{ role }</span>)}</p>
                <p>Joined: {createdAt}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Edit</button>
                </div>
            </div>
        </div>
    )
}

export default AccountSettings