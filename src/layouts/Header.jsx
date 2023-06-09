import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import user from '../assets/user.png'

export default function Header() {
    return (
    <nav className="main-nav">
        <Link className='main-nav-logo' to='/'>
            <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <Link className="main-nav-item" to="/sign-in">
            <img src={user} alt="user icon" className="main-nav-user-icon"/>
            Sign In
        </Link>
    </nav>
    )}
