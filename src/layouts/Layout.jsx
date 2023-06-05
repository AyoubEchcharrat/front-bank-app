import {Outlet} from 'react-router-dom'
import Header from './Header'
import './Layout.css'


export default function Layout() {
    return <div className='App'>
        <Header/>
        <Outlet/>
        <div className='leftBar-nav'>Fouter</div>
    </div>
}