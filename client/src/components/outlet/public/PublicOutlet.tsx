import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import { OutletWrapper } from '../outlet_styles'

const PublicOutlet = ({ theme, handleThemeSwitch }:ThemeProps) => {
    return (
        <OutletWrapper>
            <Navbar theme={theme} handleThemeSwitch={ handleThemeSwitch} />
            <Outlet />
            <Footer />
        </OutletWrapper>
    )
}

export default PublicOutlet