import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card'

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
        <main>
            <Card>
                <form
                    className="card-body"
                    onSubmit={handleSubmit}>
                    { errors.network && <p aria-live="assertive"  className='warning'>{errors.network}</p>}
                    <h1
                        className="card-title"
                    >Welcome Back to TaskMaster</h1>
                    <div
                        className="form-control"
                    >
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
                    <div
                        className="form-control"
                    >
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
                    <div 
                        className='flex align-middle mt-4'
                    >
                        <label htmlFor="show-password">show password</label>
                        <input
                            className="toggle ml-8"
                            checked={showPassword}
                            onChange={(e) => setShowPassword(e.target.checked)}
                            type="checkbox" id="show-password" />
                    </div>
                    <div className="card-actions justify-end">
                        <button 
                            className="btn btn-primary"
                            type="submit">Login</button>
                    </div>
                </form>
            </Card>
        </main>
    )
}

export default Login
