import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../features/auth/authSlice'
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let status = 'user'
    if (token) {
        const decoded = jwtDecode(token) as { UserInfo: { username: string, userId: string, roles: string[] } }
        const { username, userId , roles } = decoded.UserInfo
        isManager = roles.includes('Manager')
        isAdmin = roles.includes('Admin')

        if (isManager) status = 'Manager'
        if (isAdmin) status = 'Admin'
        return { username, userId, roles, status, isManager, isAdmin }
    }

    return { username: '', roles: [], isManager, isAdmin, status }
}
export default useAuth