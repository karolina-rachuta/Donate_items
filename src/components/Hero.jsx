import decoration from "../assets/Decoration.svg";
import {Link as RouterLink} from "react-router-dom";
import React from "react";

const Hero = () => {
    return (
        <div className="hero__container">
            <div className="hero__box">
                <p>Zacznij pomagać! <br/>
                    Oddaj niechciane rzeczy w zaufane ręce</p>
                <img src={decoration} alt="Decoration"/>
                <div className="hero__btn">
                    <RouterLink to="/logowanie">
                        <button>Oddaj <br/> rzeczy</button>
                    </RouterLink>
                    <RouterLink to="/logowanie">
                        <button>Zorganizuj <br/> zbiórkę</button>
                    </RouterLink>
                </div>
            </div>
        </div>
    )
}
export default Hero;