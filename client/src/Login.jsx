import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from './Firebase'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const handleLogin = async () => {
        const loginResponse = await signInWithPopup(auth, provider)
        const user = loginResponse.user
        const userData = {
            name: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            avatar: user.photoURL,
        }

        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'post',
            credentials: 'include',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(userData)
        })
        const data = await response.json()
        if (!response.ok) {
            alert(data.message)
        }

        navigate('/dashboard')
    }
    return (
        <div>
            <h1>Microsoft Login Integration</h1>
            <button onClick={handleLogin}>Login With Microsoft</button>
        </div>
    )
}

export default Login