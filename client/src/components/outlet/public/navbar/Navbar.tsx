import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSendLogoutMutation } from '../../../../features/auth/authApiSlice'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../../../../features/auth/authSlice'
import ThemeButton from '../../../ThemeButton'

const Navbar = () => {

    const isLoggedIn = useSelector(selectCurrentToken)

    const [sendLogout, {
        isLoading,
    }] = useSendLogoutMutation()

    const [scrolled, setScrolled] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            if (offset > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`${ scrolled ? 'bg-primary' : 'bg-base-200'} navbar sticky top-0 z-30`}>
            <div className="flex-1">
                <Link
                    className="btn btn-ghost normal-case text-xl"
                    to='/'>TaskMaster</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {isLoading ? <span>Logging out...</span> :
                        isLoggedIn ?
                
                            <button 
                                className='btn btn-secondary'
                                onClick={sendLogout}>logout</button>
                            :
                            <>
                                <li>
                                    <Link to='/login'>Login</Link></li>
                                <li>
                                    <Link to='/register'>Join</Link>
                                </li>
                            </>
                    }
                    <ThemeButton />
                </ul>
            </div>
        </div>
    )
}

export default Navbar