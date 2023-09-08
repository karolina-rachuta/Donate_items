import decoration from "../assets/Decoration.svg";
import {Link as RouterLink} from "react-router-dom";
import {useUser} from "../AuthProvider.jsx";

const Hero = () => {
    const user = useUser()
    return (
        <div className="hero__container">
            <div className="hero__box">
                <p>Zacznij pomagać! <br/>
                    Oddaj niechciane rzeczy w zaufane ręce</p>
                <img src={decoration} alt="Decoration"/>
                <div className="hero__btn">
                    {user ? <RouterLink to="/oddaj-rzeczy">
                            <button>Oddaj <br/> rzeczy</button>
                        </RouterLink>
                        : <RouterLink to="/logowanie">
                            <button>Oddaj <br/> rzeczy</button>
                        </RouterLink>}
                    {user ? <RouterLink to="/oddaj-rzeczy">
                            <button>Zorganizuj <br/> zbiórkę</button>
                        </RouterLink>
                        : <RouterLink to="/logowanie">
                            <button>Zorganizuj <br/> zbiórkę</button>
                        </RouterLink>}
                </div>
            </div>
        </div>
    )
}
export default Hero;