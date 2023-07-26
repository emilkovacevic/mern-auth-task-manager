import { Outlet } from 'react-router-dom'
import AsideMenu from './menu-sidebar/AsideMenu'
import Navbar from './navbar/Navbar'

const ProtectedOutlet = () => {
    return (
        <div
            className='transition-all duration-300'
        >
            <Navbar />
            <div className='md:flex fixed w-full bg-base-200'>
                <AsideMenu />
                <Outlet />
            </div>
        </div>
    )
}

export default ProtectedOutlet