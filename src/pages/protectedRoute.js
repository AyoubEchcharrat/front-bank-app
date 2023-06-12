import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"

export const ProtectedRoute = () => {
    const { userProfile } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (!userProfile) {
            console.log('unauthorized')
            navigate('/')
        }
    }, [navigate, userProfile])

    return userProfile && <Outlet />
}