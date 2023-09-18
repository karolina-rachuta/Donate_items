import decoration from "../../assets/Decoration.svg"

const Contact = () => {
    return (
        <div className="container container__contacts" id="contact">
            <div className="contact__form">
                <div className="form__box">
                    <h3 className="contact__hdl">Contact with us</h3>
                    <img src={decoration} alt="Decoration"/>
                    <div className="contact__row">
                        <div className="contact__row--form">
                            <label className="contact__sub" htmlFor="name">First Name</label>
                            <input type="text" id="name"/>
                        </div>
                        <div className="contact__row--form">
                            <label className="contact__sub" htmlFor="email">Enter your email</label>
                            <input type="email" id="email"/>
                        </div>
                    </div>
                    <div className="contact__row--form">
                        <label className="contact__sub" htmlFor="message">Enter your message</label>
                        <textarea name="messega" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className= "box__btn--contact">
                    <button className="btn">Send</button>
                </div>
            </div>
        </div>
    )
}
export default Contact;