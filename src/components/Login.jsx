import Navigation from "./Navigation.jsx";
import decoration from "../assets/Decoration.svg";
import React from "react";

const Login = () => {
    return (
        <div className="container">
            <Navigation/>
            <div className="login__container">
                <div className="login__box">
                    <h1>Login</h1>
                    <img src={decoration} alt="Decoration"/>
                    <div className="formBtn__container">
                        <div className="form__container">
                            <div className="form__box">
                                <label htmlFor="email">Email </label>
                                <input type="email" id="email"/>
                            </div>
                            <div className="form__box">
                                <label htmlFor="password">Password </label>
                                <input type="password" id="password"/>
                            </div>
                        </div>
                        <div className="btn__container">
                            <button type="submit">Register</button>
                            <button className="form__btn--clicked" type="submit">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;