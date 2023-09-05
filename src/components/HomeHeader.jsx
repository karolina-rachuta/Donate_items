import {Link} from "react-router-dom";

const HomeHeader = () => {
    return (
        <header className="container header__container">
            <nav>
                <ul className="menu menu__login">
                    <li><Link to="/logowanie">Zaloguj</Link></li>
                    <li><Link to="/rejestracja">Załóż konto</Link></li>
                </ul>
                <ul className="menu menu__home">
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
            <div className="hero__box">
                <p>Zacznij pomagać! <br/>
                    Oddaj niechciane rzeczy w zaufane ręce</p>
                {/*<img src="../assets/Decoration.svg" alt="Decoration"/>*/}
                <div className="hero__btn">
                    <button><Link to="/logowanie">Oddaj <br/> rzeczy</Link></button>
                    <button><Link to="/logowanie">Zorganizuj <br/> zbiórkę</Link></button>
                </div>
            </div>
        </header>
    )
}
export default HomeHeader;