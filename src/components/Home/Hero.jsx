import decoration from "../../assets/Decoration.svg";
import {Link as RouterLink} from "react-router-dom";
import {useUser} from "../../AuthProvider.jsx";

const Hero = () => {
    const user = useUser()
    return (
        <div className="hero__container">
            <div className="hero__box">
                <p>Start helping! <br/>
                    Put unwanted things in trusted hands</p>
                <img src={decoration} alt="Decoration"/>
                <div className="hero__btn">
                    {user ? <RouterLink to="/oddaj-rzeczy">
                            <button>Give <br/> Items</button>
                        </RouterLink>
                        : <RouterLink to="/logowanie">
                            <button>Give <br/> Items</button>
                        </RouterLink>}
                    {user ? <RouterLink to="/oddaj-rzeczy">
                            <button>Organize <br/> Collection</button>
                        </RouterLink>
                        : <RouterLink to="/logowanie">
                            <button>Organize <br/> Collection</button>
                        </RouterLink>}
                </div>
            </div>
        </div>
    )
}
export default Hero;