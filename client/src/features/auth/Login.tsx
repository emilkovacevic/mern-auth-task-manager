import { useEffect, useState } from 'react'
import { Card } from '../../global-styles/component_styles'
import { Main } from '../../global-styles/htmlTag_styles'
import  FormContainer  from './auth_styles'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [login, { isLoading }] = useLoginMutation()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        network: ''
    })
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        setErrors({
            email: '',
            password: '',
            network: ''
        })
    }, [formData.email, formData.password])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault()
        const formErrors = {
            email: '',
            password: ''
        }
        if (!formData.email) {
            formErrors.email = 'Email is required'
        }
        if (!formData.password) {
            formErrors.password = 'Password is required'
        }
        else {
            try {
                const userData = await login({ ...formData }).unwrap()
                dispatch(setCredentials({ ...userData }))
                setErrors({
                    email: '',
                    password: '',
                    network: ''
                })
                setFormData({
                    email: '',
                    password: ''
                })
                navigate('/dashboard')
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            catch (err: any) {
             
                if (!err.status) {
                    setErrors({ ...errors, network: err.data?.message })
                }
                else if (err.status == 'PARSING_ERROR') {
                    setErrors({ ...errors, network: 'authentication failed' })
                }
                else if (err.status == 400) {
                    setErrors({ ...errors, network: err.data?.message })
                } else if (err.status == 401) {
                    setErrors({ ...errors, network: err.data?.message })
                } else {
                    setErrors({ ...errors, network: err.data?.message || 'Something went wrong' })
                }
            }
        }
    }
    if(isLoading) return <div>Loading...</div>
    return (
        <Main>
            <FormContainer>
                <Card>
                    <form onSubmit={handleSubmit}>
                        { errors.network && <p aria-live="assertive"  className='warning'>{errors.network}</p>}
                        <h1>Welcome Back to TaskMaster</h1>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                            {errors.email && <span className='warning'>{errors.email}</span>}
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                            {errors.password && <span className='warning'>{errors.password}</span>}
                        </div>
                        <div className='checkbox'>
                            <label htmlFor="show-password">show password</label>
                            <input
                                checked={showPassword}
                                onChange={(e) => setShowPassword(e.target.checked)}
                                type="checkbox" id="show-password" />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </Card>
            </FormContainer>
        </Main>
    )
}

export default Login
