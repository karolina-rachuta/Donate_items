import Navigation from "./Navigation.jsx";
import decoration from "../assets/Decoration.svg";
import React, {useState} from "react";
import {Link as RouterLink} from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setReapeatPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorRepeatedPassword, setRepeatedPassword] = useState("");
    const handleRegisterButton = () => {
        if (!email.includes("@")) {
            setErrorEmail("Email has a wrong format!");
        }
        if (password.length < 6) {
            setErrorPassword("Password is too short!");
        }
        if (password !== repeatedPassword) {
            setRepeatedPassword("Passwords do not match!")
        }
    }
    return (
        <div className="container">
            <Navigation/>
            <div className="login__container">
                <div className="login__box">
                    <h1>Register</h1>
                    <img src={decoration} alt="Decoration"/>
                    <div className="formBtn__container formBtn__container--register">
                        <div className="form__container">
                            <div className="form__box form__box-register">
                                <label htmlFor="email">Email </label>
                                <input type="email" id="email" value={email}
                                       onChange={(e) => setEmail(e.target.value)} className={errorEmail ? "error-input" : "correct-input"}/>
                            </div>
                            {errorEmail && <p className="error-message">{errorEmail}</p>}
                            <div className="form__box">
                                <label htmlFor="password">Password </label>
                                <input type="password" id="password" value={password}
                                       onChange={(e) => setPassword(e.target.value)} className={errorPassword ? "error-input" : "correct-input"}/>
                            </div>
                            {errorPassword && <p className="error-message">{errorPassword}</p>}
                            <div className="form__box">
                                <label htmlFor="repeatedPassword">Confirm Password </label>
                                <input type="password" id="repeatedPassword" value={repeatedPassword}
                                       onChange={(e) => setReapeatPassword(e.target.value)} className={errorRepeatedPassword ? "error-input" : "correct-input"}/>
                            </div>
                            {errorRepeatedPassword && <p className="error-message">{errorRepeatedPassword}</p>}
                        </div>
                        <div className="btn__container">
                            <RouterLink to="/logowanie"><button type="submit">Login</button></RouterLink>
                            <button className="form__btn--clicked" type="submit"
                                    onClick={handleRegisterButton}>Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;