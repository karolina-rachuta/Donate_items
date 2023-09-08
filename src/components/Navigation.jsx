import React, {useState} from 'react';
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import {useUser} from "../AuthProvider.jsx";
import {signOut} from "firebase/auth";

import {auth} from "../firebase.js";

const Navigation = () => {
    // const isLogged = false;
    const navigate = useNavigate();
    const user = useUser()
    console.log(user);

    const handleLogOut = () => {
        signOut(auth).then(() => {
            navigate("/wylogowano");
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <nav>
            <ul className="menu menu__login">
                {/*{isLogged ? (*/}
                {/*    <>*/}
                {/*        dupa@dupa.pl*/}
                {/*    </>*/}
                {/*) : (*/}
                {/*    <>*/}
                {/*        <li><RouterLink to="/logowanie">Zaloguj</RouterLink></li>*/}
                {/*        <li><RouterLink to="/rejestracja">Załóż konto</RouterLink></li>*/}
                {/*    </>*/}
                {/*)}*/}
                {user ? (
                        <>
                            <li>(user.email)</li>
                            <li onClick={handleLogOut}>Log out</li>
                        </>
                    )
                    : (<>
                        <li><RouterLink to="/logowanie">Zaloguj</RouterLink></li>
                        <li><RouterLink to="/rejestracja">Załóż konto</RouterLink></li>
                    </>)}


            </ul>
            <ul className="menu menu__home">
                <li><RouterLink to="/">Start</RouterLink></li>
                <li><ScrollLink to="threeColumns">O co chodzi?</ScrollLink></li>
                <li><ScrollLink to="aboutUs">O nas</ScrollLink></li>
                <li><ScrollLink to="organizations">Fundacja i organizacje</ScrollLink></li>
                <li><ScrollLink to="contact">Kontakt</ScrollLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;
