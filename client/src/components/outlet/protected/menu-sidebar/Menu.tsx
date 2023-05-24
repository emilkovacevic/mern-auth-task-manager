import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li>New task</li>
                <li>Calendar</li>
                <li>Stats</li>
                <li><Link to='/dashboard/account'>Account</Link></li>
            </ul>
        </nav>
    )
}

export default Menu