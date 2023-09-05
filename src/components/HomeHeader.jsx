import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const HomeHeader = () => {
    return (
        <header className="container header__container" id="header">
            <nav>
                <ul className="menu menu__login">
                    <li><RouterLink to="/logowanie">Zaloguj</RouterLink></li>
                    <li><RouterLink to="/rejestracja">Załóż konto</RouterLink></li>
                </ul>
                <ul className="menu menu__home">
                    <li><ScrollLink to="header">Start</ScrollLink> </li>
                    <li><ScrollLink to="threeColumns" >O co chodzi?</ScrollLink></li>
                    <li><ScrollLink to="aboutUs">O nas</ScrollLink></li>
                    <li><ScrollLink to="organizations">Fundacja i organizacje</ScrollLink></li>
                    <li><ScrollLink to="contact">Kontakt</ScrollLink></li>
                </ul>
            </nav>
            <div className="hero__box">
                <p>Zacznij pomagać! <br/>
                    Oddaj niechciane rzeczy w zaufane ręce</p>
                {/*<img src="../assets/Decoration.svg" alt="Decoration"/>*/}
                <div className="hero__btn">
                    <button><RouterLink to="/logowanie">Oddaj <br/> rzeczy</RouterLink></button>
                    <button><RouterLink to="/logowanie">Zorganizuj <br/> zbiórkę</RouterLink></button>
                </div>
            </div>
        </header>
    )
}
export default HomeHeader;