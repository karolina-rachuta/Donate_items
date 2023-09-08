import Home from "./components/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Oddaj from "./components/Oddaj.jsx";
import Register from "./components/Register.jsx";
import LogOut from "./components/LogOut.jsx";
import Login from "./components/Login.jsx";
import "./scss/main.scss";
import {useState} from "react";
import {AuthProvider} from "./AuthProvider.jsx";
import {PrivateRoute} from "./components/PrivateRoute.jsx";

function App() {

    return (
        <>
        <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/oddaj-rzeczy" element={<PrivateRoute>
                    <Oddaj/>
                </PrivateRoute>}/>
                <Route path="/logowanie" element={<Login/>}/>
                <Route path="/rejestracja" element={<Register/>}/>
                <Route path="/wylogowano" element={<LogOut/>}/>
            </Routes>
        </BrowserRouter>
        </AuthProvider>
</>
)
}

export default App
