import React from 'react';
import Navigation from "../Navigation.jsx";
import Hero from "./Hero.jsx";

const HomeHeader = () => {
    return (
        <header className="container header__container" id="header">
            <Navigation />
            <Hero/>
        </header>
    )
}
export default HomeHeader;