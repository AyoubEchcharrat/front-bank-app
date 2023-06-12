import { useDispatch, useSelector } from "react-redux"
import Spinner from "../../components/Spinner"
import { getuserProfile } from "../../features/getprofileActions"
import { useEffect } from "react"

export default function UserHeader() {
    const dispatch = useDispatch()
    const {userToken} = useSelector((state) => state.auth)
    
    useEffect(() => {
        dispatch(getuserProfile(userToken))
    },[userToken,dispatch])

    
    const {userProfile, loading} = useSelector((state) => state.auth)
    return (
        {loading} ?  <Spinner /> :
    <div className="header">
        <h1>Welcome back<br />
        {userProfile.firstName} {userProfile.lastName}
        </h1>
        <button className="edit-button">Edit Name</button>
    </div>
    )
}