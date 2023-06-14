import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import user from '../assets/user.png'
import { useSelector,useDispatch } from 'react-redux'
import { logout, refreshUserDatas } from '../features/authSlice'
import { useEffect } from 'react'
import logouticon from '../assets/logout.png'

export default function Header() {
    const { userToken, userProfile } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(()=> {
            dispatch(refreshUserDatas())
    },[dispatch])

    return (
    <nav className="main-nav">
        <Link className='main-nav-logo' to='/'>
            <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {userToken ?  
                <div className='info-header-container'>
                    <Link className='username-header-container' to="/user">
                        <img src={user} alt="user icon" className="main-nav-user-icon"/>
                        {userProfile.firstName}
                    </Link>
                    <Link onClick={() => dispatch(logout())} className="main-nav-item" to="/">
                        <img src={logouticon} alt="logout" className="main-nav-user-icon"/>
                        Sign out
                    </Link>
                </div>
            : 
                <Link className="main-nav-item" to="/sign-in">
                    <img src={user} alt="user icon" className="main-nav-user-icon"/>
                    Sign In
                </Link>
        }
    </nav>
    )}
