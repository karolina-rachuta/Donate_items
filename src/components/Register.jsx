import Navigation from "./Navigation.jsx";
import decoration from "../assets/Decoration.svg";
import React from "react";

const Register = () => {
    return (
        <div className="container">
            <Navigation />
            <div className="login__container">
                <div className="login__box">
                    <h1>Register</h1>
                    <img src={decoration} alt="Decoration"/>
                    <div className="formBtn__container formBtn__container--register">
                        <div className="form__container">
                            <div className="form__box form__box-register">
                                <label htmlFor="email">Email </label>
                                <input type="email" id="email"/>
                            </div>
                            <div className="form__box">
                                <label htmlFor="password">Password </label>
                                <input type="password" id="password"/>
                            </div>
                            <div className="form__box">
                                <label htmlFor="repeatPassword">Confirm Password </label>
                                <input type="password" id="repeatPassword"/>
                            </div>
                        </div>
                        <div className="btn__container">
                            <button type="submit">Login</button>
                            <button className="form__btn--clicked" type="submit">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;