import React, {useState} from 'react';
import {Link as RouterLink, useLocation, useNavigate} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import {useUser} from "../AuthProvider.jsx";
import {signOut} from "firebase/auth";
import {auth} from "../firebase.js";

const Navigation = () => {
    const navigate = useNavigate();
    const user = useUser()
    console.log(user);
    const location = useLocation();

    const handleLogOut = () => {
        signOut(auth).then(() => {
            navigate("/wylogowano");
        }).catch((error) => {
            // An error happened.
        });
    }
    const isHomePage = location.pathname === '/';
    return (
        <nav>
            <ul className="menu menu__login">
                {user ? (
                    <>
                        <li className="menu__email">Cześć {user.email}!</li>
                        <li className="menu__oddaj menu__ramka"><RouterLink to="/oddaj-rzeczy">Oddaj rzeczy</RouterLink></li>
                        <li className="menu__wyloguj" onClick={handleLogOut}>Log out</li>
                    </>
                ) : (
                    <>
                        <li><RouterLink to="/logowanie">Zaloguj</RouterLink></li>
                        <li className="menu__ramka"><RouterLink to="/rejestracja">Załóż konto</RouterLink></li>
                    </>
                )}
            </ul>

            <ul className="menu menu__home">
                <li className={isHomePage ? "menu__ramka2" : ""}><RouterLink to="/">Start</RouterLink></li>
                <li><ScrollLink to="threeColumns">O co chodzi?</ScrollLink></li>
                <li><ScrollLink to="aboutUs">O nas</ScrollLink></li>
                <li><ScrollLink to="organizations">Fundacja i organizacje</ScrollLink></li>
                <li><ScrollLink to="contact">Kontakt</ScrollLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;
