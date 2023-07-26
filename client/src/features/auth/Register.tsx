import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useRegisterMutation } from './authApiSlice'
import Card from '../../components/Card'

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        network: ''
    })

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const [register, { isLoading }] = useRegisterMutation()
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formErrors = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
        if (!formData.username) {
            formErrors.username = 'Username is required'
        } else if (formData.username.length < 3) {
            formErrors.username = 'Username must be at least 3 characters long'
        }
        if (!formData.email) {
            formErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Invalid email address'
        }
        if (!formData.password) {
            formErrors.password = 'Password is required'
        } else if (formData.password.length < 6) {
            formErrors.password = 'Password must be at least 6 characters long'
        }
        if (!formData.confirmPassword) {
            formErrors.confirmPassword = 'Confirm password is required'
        } else if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = 'Passwords do not match'
        }
      
        if (!formErrors.email && !formErrors.password && !formErrors.confirmPassword) {
            // form is valid, submit the data
            setShowPassword(false)
            try {
                const response = await register({ ...formData }).unwrap()
                alert(JSON.stringify(response.message) + ' Please login to continue')
                navigate('/login')
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                if (!err.status) {
                    setErrors({ ...errors, network: err.data?.message || 'No response' })
                } else if (err.status === '400') {
                    errors.network = err.data?.message
                } else if (err.status === '401') {
                    errors.network = err.data?.message
                } else if (err.status == 'FETCH_ERROR') {
                    setErrors({ ...errors, network: err.error })
                }
                else {
                    setErrors({ ...errors, network: err.data?.message || 'Something went wrong' })
                }
            }
        }
    }
    if(isLoading) return <p>Loading...</p>
    return (
        <main>
            <Card>
                <form
                    className="card-body"
                    onSubmit={handleSubmit}>
                    { errors.network && <p aria-live="assertive"  className='warning'>{errors.network}</p>}
                    <h1>Join TaskMaster</h1>
                    <div
                        className="form-control"
                    >
                        <label
                            aria-label="Username"
                            htmlFor="username">Username</label>
                        <input 
                            type="text"
                            id="username"
                            value={formData.username}   
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}    
                            minLength={3}
                            required
                        />
                    </div>
                    <div
                        className="form-control"
                    >
                        <label
                            aria-label="Email"
                            htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        {errors.email && <p aria-live="assertive" className='warning'>{errors.email}</p>}
                    </div>
                    <div
                        className="form-control"
                    >
                        <label
                            aria-label="Password"
                            htmlFor="password">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            minLength={6}
                            required
                        />
                        {errors.password && <p aria-live="assertive" className='warning'>{errors.password}</p>}
                    </div>
                    <div
                        className="form-control"
                    >
                        <label
                            aria-label="Confirm Password"
                            htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            minLength={6}
                            required
                        />
                        {errors.confirmPassword && <p aria-live="assertive" className='warning'>{errors.confirmPassword}</p>}
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
                    <button
                        className="btn btn-primary"
                        type="submit">Register</button>
                </form>
            </Card>
        </main>
    )
}

export default Register
