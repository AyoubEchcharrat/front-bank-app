import {useDispatch} from 'react-redux'
/* import { checkDataConnexion } from '../../store' */
import { useEffect, useState } from "react";
import './Formular.css'
import * as signActions from '../../features/signinSlice'
import { registerUser } from "../../features/signinCallAPI";

export default function Formular() {
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        dispatch(signActions.clog(inputs))

    }

    useEffect(() => {
        dispatch(registerUser(inputs))
    },[dispatch, inputs])

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label>Email:</label>
                    <input 
                        type="text" 
                        name="email" 
                        value={inputs.email || ""} 
                        onChange={handleChange}/>
                </div>
                <div className="input-wrapper">
                    <label>Password:</label>
                    <input 
                    type="password" 
                    name="password" 
                    value={inputs.password || ""} 
                    onChange={handleChange}/>
                </div>
                <input onClick={handleSubmit} type="submit" />
            </form>
        </section>
    )
}