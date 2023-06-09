import { useSelector } from "react-redux";
import Formular from "../../components/formular/Formular";
import { selectTheme } from "../../features/theme";


export default function SignIn() {

    const theme = useSelector(selectTheme)
    return (
        <main className={theme === 'light' ? 'main bg-light' : 'main bg-dark'}>
            <Formular/>

        </main>
    )
}