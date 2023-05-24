import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

interface Props {
    allowedRoles: string[]
}

const RequireAuth = ({ allowedRoles }: Props) => {
    const location = useLocation()
    const { roles } = useAuth()
    const content = (
        roles.some(role => allowedRoles.includes(role))
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )

    return content
}
export default RequireAuth