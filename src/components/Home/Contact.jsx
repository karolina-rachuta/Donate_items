import decoration from "../../assets/Decoration.svg"

const Contact = () => {
    return (
        <div className="container container__contacts" id="contact">
            <div className="contact__form">
                <div>
                <h3>Contact with us</h3>
                <img src={decoration} alt="Decoration"/>
                <div>
                    <label htmlFor="name">First Name</label>
                    <input type="text" id="name"/>
                </div>
                <div>
                    <label htmlFor="email">Enter your email</label>
                    <input type="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="message">Enter your message</label>
                    <textarea name="messega" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button className="btn">Send</button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;