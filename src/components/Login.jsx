import Navigation from "./Navigation.jsx";
import decoration from "../assets/Decoration.svg";
import React from "react";

const Login = () => {
    return (
        <div className="container">
            <Navigation/>
            <div className="login__container">
                <div className="login__box">
                    <h1>Zaloguj się</h1>
                    <img src={decoration} alt="Decoration"/>
                    <div className="form__container">
                        <label for="email">Email</label>
                        <input type="email" id="email"/>
                        <label for="password">Hasło </label>
                        <input type="password" id="password"/>
                    </div>
                    <div className="btn__container">
                        <button>Załóż konto</button>
                        <button>Zaloguj się</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;