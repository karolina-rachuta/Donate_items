import Navigation from "./Navigation.jsx";
import decoration from "../assets/Decoration.svg";
import {useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase.js";
// eslint-disable-next-line react/prop-types
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const navigate = useNavigate();
    const [backendError, setBackendError] = useState("");

    const handleLoginButton = () => {
        if (!email.includes("@")) {
            setErrorEmail("Email has a wrong format!");
        }
        if (password.length < 6) {
            setErrorPassword("Password is too short!");
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                setBackendError(error.message);
            });
    }

    return (
        <div className="container">
            <Navigation/>
            <div className="login__container">
                <div className="login__box">
                    <h1>Login</h1>
                    <img src={decoration} alt="Decoration"/>
                    <div className="formBtn__container">
                        <div className="form__container">
                            {backendError && <p>{backendError}</p>}
                            <div className="form__box">
                                <label htmlFor="email">Email </label>
                                <input type="email" id="email" value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       className={errorEmail? "error-input" : "correct-input"}/>
                            </div>
                            {errorEmail && <p className="error-message">{errorEmail}</p>}
                            <div className="form__box">
                                <label htmlFor="password">Password </label>
                                <input type="password" id="password" value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                       className={errorPassword ? "error-input" : "correct-input"}/>
                            </div>
                            {errorPassword && <p className="error-message">{errorPassword}</p>}
                        </div>
                        <div className="btn__container">
                            <RouterLink to="/rejestracja"><button type="submit">Register</button></RouterLink>
                            <button className="form__btn--clicked" type="submit" onClick={handleLoginButton}>Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;