import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import user from '../assets/user.png'
import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../features/authSlice'
import { useEffect } from 'react'
import { getuserProfile } from '../features/getprofileActions'


export default function Header() {
    const { userToken } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    return (
    <nav className="main-nav">
        <Link className='main-nav-logo' to='/'>
            <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {userToken ?  
                <Link onClick={() => dispatch(logout())} className="main-nav-item" to="/">
                    <img src={user} alt="user icon" className="main-nav-user-icon"/>
                    Logout
                </Link>
            : 
                <Link className="main-nav-item" to="/sign-in">
                    <img src={user} alt="user icon" className="main-nav-user-icon"/>
                    Sign In
                </Link>
        }
    </nav>
    )}
