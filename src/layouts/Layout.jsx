import {Outlet} from 'react-router-dom'
import Header from './Header'
import './Layout.css'
import Footer from './Footer'

export default function Layout() {
    return <div className='App'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
}