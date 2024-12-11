import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:3000/api/auth/get-user', {
                method: 'get',
                credentials: 'include',
            })
            const data = await response.json()
            if (!response.ok) {
                alert(data.message)
            }
            if (data.success) {
                setUser(data.user)
            }
        }
        getData()
    }, [])
    return (
        <div>
            <h1>User Data</h1>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Phone Number: {user?.phoneNumber}</p>
        </div>
    )
}

export default Dashboard