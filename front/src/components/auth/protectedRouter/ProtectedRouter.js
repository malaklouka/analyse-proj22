import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const token=localStorage.getItem("token")
    return (
        <div>
            {token?children:<Navigate  to="/signin" />}
        </div>
    )
}

export default ProtectedRoute