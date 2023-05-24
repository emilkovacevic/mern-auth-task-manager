import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header, Nav } from './navbar_styles'
import { useSendLogoutMutation } from '../../../../features/auth/authApiSlice'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../../../../features/auth/authSlice'

const Navbar = ({ theme, handleThemeSwitch }:ThemeProps) => {

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
        <Header
            scrolled={scrolled}
        >
            <Link to='/'>TaskMaster</Link>
            <Nav>
                {isLoading ? <span>Logging out...</span> :
                    isLoggedIn ?
                
                        <button onClick={sendLogout}>logout</button>
                        :
                        <>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Join</Link>
                        </>
                }
                
                <button onClick={handleThemeSwitch}>
                    {theme === 'dark' ? '🌞' : '🌙'}
                </button>
            </Nav>
        </Header>
    )
}

export default Navbar