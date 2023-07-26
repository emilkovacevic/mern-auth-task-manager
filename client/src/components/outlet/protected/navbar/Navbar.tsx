import { useNavigate } from 'react-router-dom'
import { useSendLogoutMutation } from '../../../../features/auth/authApiSlice'
import useAuth from '../../../../hooks/useAuth'
import ThemeButton from '../../../ThemeButton'


const Navbar = () => {
    const [sendLogout] = useSendLogoutMutation()
    const navigate = useNavigate()
    const { username, userImage } = useAuth()
    const handleLogout = () => {
        sendLogout
        navigate('/')
    }

    return (
        <nav
            className='navbar sticky top-0 bg-base-200 flex justify-between shadow-md z-10 p-2'
        >
            <div className="drawer-content md:hidden md:drawer-toggle">
                {/* Page content here */}
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
            </div> 
            <div
                className='w-full flex flex-row align-middle justify-between ml-6'
            >
                <div className='flex align-middle'>
                    <div className="avatar">
                        <div className="w-12 rounded">
                            <img alt={username || 'user'} src={userImage || '/images/defaultUser.jpg'} />
                        </div>
                    </div>
                    <div> {username ? username : 'not logged in'}</div>
                </div>
                <div>
                    <ThemeButton />
                    <button
                        className='btn btn-primary ml-6'
                        onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar