import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../features/auth/authSlice'
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let status = 'user'
    let userImage = '' // Set a default value for userImage

    if (token) {
        const decoded = jwtDecode(token) as {
      UserInfo: {
        username: string;
        userId: string;
        roles: string[];
        userImage: string; 
      };
    }
        const { username, userId, roles, userImage: decodedUserImage } = decoded.UserInfo // Renamed decodedUserImage variable

        isManager = roles.includes('Manager')
        isAdmin = roles.includes('Admin')
        userImage = decodedUserImage || '' // Assign the decoded userImage value to userImage or set an empty string if it's not available

        if (isManager) status = 'Manager'
        if (isAdmin) status = 'Admin'

        return { username, userId, roles, status, isManager, isAdmin, userImage }
    }

    return {
        username: '',
        userId: '',
        roles: [],
        status,
        isManager,
        isAdmin,
        userImage, // Return the userImage here in the default object
    }
}

export default useAuth
