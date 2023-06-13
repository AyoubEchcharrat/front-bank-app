import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"

export const ProtectedRoute = () => {
    const { userProfile } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (!userProfile.email) {
            console.log('unauthorized')
            navigate('/sign-in')
        }
    }, [navigate, userProfile])

    return userProfile && <Outlet />
}