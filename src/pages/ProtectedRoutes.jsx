import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    const { trainerName } = useSelector(states => states)


    if (trainerName.length >= 4) {
        return <Outlet />
    } else {
        return <Navigate to='/' />
    }
}

export default ProtectedRoutes