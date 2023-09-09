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
                        <li className="menu__email">Hello {user.email}!</li>
                        <li className="menu__oddaj menu__ramka"><RouterLink to="/oddaj-rzeczy">Give Items</RouterLink></li>
                        <li className="menu__wyloguj" onClick={handleLogOut}>Log out</li>
                    </>
                ) : (
                    <>
                        <li><RouterLink to="/logowanie">Login</RouterLink></li>
                        <li className="menu__ramka"><RouterLink to="/rejestracja">Register</RouterLink></li>
                    </>
                )}
            </ul>

            <ul className="menu menu__home">
                <li className={isHomePage ? "menu__ramka2" : ""}><RouterLink to="/">Home</RouterLink></li>
                <li><ScrollLink to="donate">How to Start</ScrollLink></li>
                <li><ScrollLink to="aboutUs">About Us</ScrollLink></li>
                <li><ScrollLink to="organizations">Foundation and Organizations</ScrollLink></li>
                <li><ScrollLink to="contact">Contact</ScrollLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;
