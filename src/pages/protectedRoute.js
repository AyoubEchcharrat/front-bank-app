import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const ProtectedRoute = () => {
    const userToken = localStorage.getItem('userToken')
        ? localStorage.getItem('userToken')
        : null
    const navigate = useNavigate()
    useEffect(() => {
        if (!userToken) {
            console.log('unauthorized')
            navigate('/sign-in')
        }
    }, [navigate, userToken])

    return <Outlet />
}