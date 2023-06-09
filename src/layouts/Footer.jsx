import { useDispatch, useSelector } from "react-redux"
import { selectTheme } from "../features/theme"
import * as themeActions from '../features/theme'

export default function Footer() {
    const theme = useSelector(selectTheme)
    const dispatch = useDispatch()

    const themeClass = {
        
    }

    return (
        <footer className="footer"> 
            <button className={themeClass} onClick={() => dispatch(themeActions.toggle())}>
              Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
            </button>
            <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
    )}