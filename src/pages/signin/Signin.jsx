import { useSelector } from "react-redux";
import Formular from "../../components/formular/Formular";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const { userToken } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (userToken) {
        localStorage.setItem('userToken',userToken)
        navigate('/user')
        }
    }, [navigate, userToken])
    return (
        <main className='main bg-dark'>
            <Formular/>

        </main>
    )
}