import decoration from "../../assets/Decoration.svg";
import icon1 from "../../assets/Icon-1.svg";
import icon2 from "../../assets/Icon-2.svg";
import icon3 from "../../assets/Icon-3.svg";
import icon4 from "../../assets/Icon-4.svg";
import {Link as RouterLink} from "react-router-dom";
import {useUser} from "../../AuthProvider.jsx";

const OddajRzeczy = () => {
    const user = useUser()
    return (
        <div className="container container__giveAway" id="donate">
            <div className="box__giveAway">
                <p>Wystarczą 4 proste kroki</p>
                <img src={decoration} alt="Decoration"/>
                <div className="box__fourColumns">
                    <div className="box__column">
                        <img src={icon1} alt="Icon1"/>
                        <span>Wybierz rzeczy</span>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="box__column">
                        <img src={icon2} alt="Icon2"/>
                        <span>Spakuj je</span>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="box__column">
                        <img src={icon3} alt="Icon3"/>
                        <span>Zdecyduj komu chcesz pomóc</span>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="box__column">
                        <img src={icon4} alt="Icon4"/>
                        <span>Zamów kuriera</span>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                {user ? <RouterLink to="/oddaj-rzeczy">
                        <button>Give items</button>
                    </RouterLink>
                    : <RouterLink to="/logowanie">
                        <button>Give Items</button>
                    </RouterLink>}
            </div>
        </div>
    )
}
export default OddajRzeczy;