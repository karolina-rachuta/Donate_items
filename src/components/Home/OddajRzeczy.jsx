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
                <p>It takes just 4 simple steps:</p>
                <img src={decoration} alt="Decoration"/>
                <div className="box__fourColumns">
                    <div className="box__column">
                        <img src={icon1} alt="Icon1"/>
                        <span>Choose items</span>
                        <p>clothes, toys, agd and others</p>
                    </div>
                    <div className="box__column">
                        <img src={icon2} alt="Icon2"/>
                        <span>Pack it</span>
                        <p>use trash bags</p>
                    </div>
                    <div className="box__column">
                        <img src={icon3} alt="Icon3"/>
                        <span>Decide whom you want to help</span>
                        <p>choose trusted organization</p>
                    </div>
                    <div className="box__column">
                        <img src={icon4} alt="Icon4"/>
                        <span>Order the delivery</span>
                        <p>courier will pick up your donation</p>
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