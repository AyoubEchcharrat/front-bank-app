import { useSelector } from "react-redux";
import Formular from "../../components/formular/Formular";
import { selectTheme } from "../../features/theme";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const { userToken } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (userToken) {
        navigate('/user')
        }
    }, [navigate, userToken])

    const theme = useSelector(selectTheme)
    return (
        <main className={theme === 'light' ? 'main bg-light' : 'main bg-dark'}>
            <Formular/>

        </main>
    )
}