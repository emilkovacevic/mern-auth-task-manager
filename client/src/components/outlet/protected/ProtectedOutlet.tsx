import { Outlet } from 'react-router-dom'
import { HorizontalLayout } from '../../../global-styles/component_styles'
import { OutletWrapper } from '../outlet_styles'
import Listing from './listing-sidebar/Listing'
import Menu from './menu-sidebar/Menu'
import Navbar from './navbar/Navbar'

const ProtectedOutlet = () => {
    return (
        <OutletWrapper>
            <Navbar/>
            <HorizontalLayout className='dashboard'>
                <Menu/>
                <Outlet />
                <Listing />
            </HorizontalLayout>
        </OutletWrapper>
    )
}

export default ProtectedOutlet