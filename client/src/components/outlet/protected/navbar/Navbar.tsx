import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useSendLogoutMutation } from '../../../../features/auth/authApiSlice'
import useAuth from '../../../../hooks/useAuth'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    button{
        background: none;
        border: none;
        cursor: pointer;
        :hover{
            text-decoration: underline;
        }
    }
    `
const Navbar = () => {
    const [sendLogout] = useSendLogoutMutation()
    const navigate = useNavigate()
    const { username } = useAuth()
    const handleLogout = () => {
        sendLogout
        navigate('/')
    }
    return (
        <Nav>
            <span> {username ? username : 'not logged in'}</span>
            <button onClick={handleLogout}>Log Out</button>
        </Nav>
    )
}

export default Navbar