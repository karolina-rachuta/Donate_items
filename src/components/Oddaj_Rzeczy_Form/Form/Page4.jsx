import {useState} from "react";
import {useUser} from "../../../AuthProvider.jsx";

const Page4 = ({address, setAddress, city, setCity, zipCode, setZipCode, phone, setPhone, date, setDate, time, setTime, notes, setNotes}) => {
    // const [address, setAddress] = useState("");
    // const [city, setCity] = useState("");
    // const [zipCode, setZipCode] = useState("");
    // const [phone, setPhone] = useState("");
    // const [date, setDate] = useState("");
    // const [time, setTime] = useState("");
    // const [notes, setNotes] = useState("");

    return (
        <div>
            <div className="important__container">
                <span>Important!</span>
                <p>Please provide the address and pickup date and time.</p>
            </div>
            <div className="form__container--section">
                <div>
                    <p className="form__text--step">Step 4/4</p>
                    <h2 className="step2__hdl">Please provide the address and pickup date and time:</h2>
                    <form>
                        <div className="box__step4">
                            <div className="box__col">
                                <h3 className="pickup__hdl">Pickup address</h3>
                                <div>
                                    <label htmlFor="street">Street</label>
                                    <input type="text" id="street" value={address} onChange={(e) => setAddress(e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="city">City</label>
                                    <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="zipcode">Zip code</label>
                                    <input type="text" id="zipcode" value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone <br/> number</label>
                                    <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                </div>
                            </div>

                            <div className="box__col">
                                <h3 className="pickup__hdl">Pickup date</h3>
                                <div>
                                    <label htmlFor="date">Date</label>
                                    <input type="text" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="">Time</label>
                                    <input type="text" id="time" value={time} onChange={(e) => setTime(e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="notes">Notes for <br/> the courier</label>
                                    <textarea id="notes" cols="30" rows="10" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="btn__box--form">
                    <button>Back</button>
                    <button>Next</button>
                </div>

            </div>
        </div>
    )
}
export default Page4;