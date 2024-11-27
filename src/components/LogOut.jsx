import Navigation from './Navigation.jsx';
import decoration from '../assets/Decoration.svg';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
const LogOut = () => {
    return (
        <div className="container">
            <Navigation />
            <div className="login__container">
                <div className="login__box">
                    <h1>You’ve been logged out</h1>
                    <img src={decoration} alt="Decoration" />
                    <RouterLink to="/">
                        {' '}
                        <button className="btn">Home</button>
                    </RouterLink>
                </div>
            </div>
        </div>
    );
};
export default LogOut;
