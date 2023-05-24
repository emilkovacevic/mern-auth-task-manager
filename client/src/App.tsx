import Index from './components/homePage/Index'
import { Routes, Route} from 'react-router-dom'
import Register from './features/auth/Register'
import Login from './features/auth/Login'
import PublicOutlet from './components/outlet/public/PublicOutlet'
import Dashboard from './features/dashboard/Dashboard'
import ProtectedOutlet from './components/outlet/protected/ProtectedOutlet'
import RequireAuth from './features/auth/RequireAuth'
import { ROLES } from './config/Roles'
import Account from './features/users/Account'

function App({ theme, handleThemeSwitch }: ThemeProps) {
    return (
        <Routes>
            <Route path="/" element={<PublicOutlet
                theme={theme} handleThemeSwitch={handleThemeSwitch} />}>
                <Route index element={<Index />} />
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
            </Route>
            <Route element={ <RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
                <Route path='dashboard' element={<ProtectedOutlet />}>
                    <Route index element={<Dashboard />} />
                    <Route path='account' element={<Account />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App
