import decoration from "../../assets/Decoration.svg";
import signature from "../../assets/Signature.svg"

const AboutUs = () => {
    return (
        <div className="container" id="aboutUs">
            <div className="container__aboutUs">
                <div className="box__text">
                    <span>About us</span>
                    <img src={decoration} alt="Decoration"/>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                        black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img className="img__signature" src={signature} alt="Signature"/>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;