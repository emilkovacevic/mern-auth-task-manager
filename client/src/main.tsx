import  React, { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { store } from './app/store'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'

function Main(): ReactElement {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<App />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<Main />)