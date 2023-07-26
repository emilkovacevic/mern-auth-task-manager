import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

const PublicOutlet = () => {
    return (
        <div
            className='flex flex-col justify-between min-h-screen' >
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default PublicOutlet