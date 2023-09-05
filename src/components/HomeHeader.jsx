import {Link} from "react-router-dom";

const HomeHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li> <Link to="/logowanie">Zaloguj</Link></li>
                    <li> <Link to="/rejestracja">Załóż konto</Link></li>
                </ul>
                <ul>
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </header>
    )
}
export default HomeHeader;