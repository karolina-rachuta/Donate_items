import Navigation from './Navigation.jsx';
import decoration from '../assets/Decoration.svg';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase.js';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorRepeatedPassword, setErrorRepeatedPassword] = useState('');
    const navigate = useNavigate();
    const [backendError, setBackendError] = useState('');
    const handleRegisterButton = () => {
        if (!email.includes('@')) {
            setErrorEmail('Email has a wrong format!');
        }
        if (password.length < 6) {
            setErrorPassword('Password is too short!');
        }
        if (password !== repeatedPassword) {
            setErrorRepeatedPassword('Passwords do not match!');
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                signOut(auth);
                navigate('/login');
            })
            .catch((error) => {
                const errorCode = error.code;
                setBackendError(error.message);
            });
    };
    return (
        <div className="container">
            <Navigation />
            <div className="login__container">
                <div className="login__box">
                    <h1>Register</h1>
                    <img src={decoration} alt="Decoration" />
                    <div className="formBtn__container formBtn__container--register">
                        <div className="form__container">
                            {backendError && <p>{backendError}</p>}
                            <div className="form__box form__box-register">
                                <label htmlFor="email">Email </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={
                                        errorEmail
                                            ? 'error-input'
                                            : 'correct-input'
                                    }
                                />
                            </div>
                            {errorEmail && (
                                <p className="error-message">{errorEmail}</p>
                            )}
                            <div className="form__box">
                                <label htmlFor="password">Password </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className={
                                        errorPassword
                                            ? 'error-input'
                                            : 'correct-input'
                                    }
                                />
                            </div>
                            {errorPassword && (
                                <p className="error-message">{errorPassword}</p>
                            )}
                            <div className="form__box">
                                <label htmlFor="repeatedPassword">
                                    Confirm Password{' '}
                                </label>
                                <input
                                    type="password"
                                    id="repeatedPassword"
                                    value={repeatedPassword}
                                    onChange={(e) =>
                                        setRepeatedPassword(e.target.value)
                                    }
                                    className={
                                        errorRepeatedPassword
                                            ? 'error-input'
                                            : 'correct-input'
                                    }
                                />
                            </div>
                            {errorRepeatedPassword && (
                                <p className="error-message">
                                    {errorRepeatedPassword}
                                </p>
                            )}
                        </div>
                        <div className="btn__container">
                            <RouterLink to="/login">
                                <button type="submit">Login</button>
                            </RouterLink>
                            <button
                                className="form__btn--clicked"
                                type="submit"
                                onClick={handleRegisterButton}
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;
