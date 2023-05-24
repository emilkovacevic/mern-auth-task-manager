import FriendList from './FriendList'
import Notifications from './Notifications'
import WorkSpaces from './WorkSpaces'

const Listing = () => {
    return (
        <div>
            <Notifications />
            <WorkSpaces />
            <FriendList />
        </div>
    )
}

export default Listing