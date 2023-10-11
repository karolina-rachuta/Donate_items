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
    const [menuOpen, setMenuOpen] = useState(false);
    const handleLogOut = () => {
        signOut(auth).then(() => {
            navigate("/logout");
        }).catch((error) => {
            // An error happened.
        });
    }
    const isHomePage = location.pathname === '/';
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

    const handleHamburger = () => {
        setMenuOpen(prevState => !prevState)
    }

    return (
        <nav>
            <ul className="menu menu__login">
                {user ? (
                    <>
                        <li className="menu__email">Hello {user.email}!</li>
                        <li className="menu__oddaj menu__ramka"><RouterLink to="/donate">Give Items</RouterLink></li>
                        <li className="menu__wyloguj" onClick={handleLogOut}>Log out</li>
                        <li>
                            <div className="hamburger" onClick={handleHamburger}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                    </>
                ) : (
                    <>
                        <li className={isLoginPage ? "menu__ramka" : "menu__ramka1"}><RouterLink
                            to="/login">Login</RouterLink>
                        </li>
                        <li className={isRegisterPage ? "menu__ramka" : "menu__ramka1"}><RouterLink
                            to="/register">Register</RouterLink></li>
                        <li>
                            <div className="hamburger" onClick={handleHamburger}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </li>
                    </>
                )}
            </ul>

            <ul className={menuOpen ? "menu menu__home open" : "menu menu__home"}>
                <li className={isHomePage ? "menu__ramka2" : "menu__ramka3"}><RouterLink to="/">Home</RouterLink></li>
                <li><ScrollLink to="donate">How to Start</ScrollLink></li>
                <li><ScrollLink to="aboutUs">About Us</ScrollLink></li>
                <li><ScrollLink to="organizations">Foundation and Organizations</ScrollLink></li>
                <li><ScrollLink to="contact">Contact</ScrollLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;
