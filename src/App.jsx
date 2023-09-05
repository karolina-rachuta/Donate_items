import Home from "./components/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Oddaj from "./components/Oddaj.jsx";
import Register from "./components/Register.jsx";
import LogOut from "./components/LogOut.jsx";
import Login from "./components/Login.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/oddaj-rzeczy" element={<Oddaj/>}/>
                    <Route path="/logowanie" element={<Login/>}/>
                    <Route path="/rejestracja" element={<Register/>}/>
                    <Route path="/wylogowano" element={<LogOut/>}/>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
