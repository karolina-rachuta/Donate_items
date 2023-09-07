import React, {useState} from 'react';
import {Link as RouterLink} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";

const Navigation = ({logged, setLogged, email}) => {

    return (
        <nav>
            <ul className="menu menu__login">
                <><li><RouterLink to="/logowanie">Zaloguj</RouterLink></li>
                <li><RouterLink to="/rejestracja">Załóż konto</RouterLink></li></>
            </ul>
            <ul className="menu menu__home">
                <li><RouterLink to="/">Start</RouterLink> </li>
                <li><ScrollLink to="threeColumns">O co chodzi?</ScrollLink></li>
                <li><ScrollLink to="aboutUs">O nas</ScrollLink></li>
                <li><ScrollLink to="organizations">Fundacja i organizacje</ScrollLink></li>
                <li><ScrollLink to="contact">Kontakt</ScrollLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;
