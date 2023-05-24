import  React, { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GlobalAppWrapper } from './global-styles/global_wrapper'
import { darkTheme, lightTheme } from './global-styles/theme'
import useThemeSwitcher from './hooks/useTheme'
import { ThemeProvider } from 'styled-components'

import { store } from './app/store'
import { Provider } from 'react-redux'

function Main(): ReactElement {
    const { theme, handleThemeSwitch } = useThemeSwitcher()
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
                <Provider store={store}>
                    <GlobalAppWrapper>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/*" element={<App
                                    theme={theme} handleThemeSwitch={handleThemeSwitch}
                                />} />
                            </Routes>
                        </BrowserRouter>
                    </GlobalAppWrapper>
                </Provider>
            </ThemeProvider>
        </React.StrictMode>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<Main />)