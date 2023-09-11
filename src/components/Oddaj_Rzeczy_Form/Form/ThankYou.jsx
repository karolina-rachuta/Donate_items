import decoration from "../../../assets/Decoration.svg"

const ThankYou = () => {
    return (
        <div className="form__container--section">
            <div className="form__container--thankYou">
                <p>Thank you for submitting the form. We will send all pickup information to your email.</p>
                <img src={decoration} alt="Decoration"/>
            </div>
        </div>
    )
}
export default ThankYou;