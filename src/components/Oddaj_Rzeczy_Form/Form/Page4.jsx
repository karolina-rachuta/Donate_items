import {useContext} from "react";
import {FormContext} from "../FormGive.jsx";

const Page4 = () => {

    const {forms: { address, city, zipCode, phone, date, time, notes }, set} = useContext(FormContext)

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
                                    <input type="text" id="street" value={address} onChange={(e) => set("address", e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="city">City</label>
                                    <input type="text" id="city" value={city} onChange={(e) => set("city", e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="zipcode">Zip code</label>
                                    <input type="text" id="zipcode" value={zipCode} onChange={(e) => set("zipCode", e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone <br/> number</label>
                                    <input type="phone" id="phone" value={phone} onChange={(e) => set("phone", e.target.value)}/>
                                </div>
                            </div>

                            <div className="box__col">
                                <h3 className="pickup__hdl">Pickup date</h3>
                                <div>
                                    <label htmlFor="date">Date</label>
                                    <input type="date" id="date" value={date} onChange={(e) => set("date", e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="">Time</label>
                                    <input type="time" id="time" value={time} onChange={(e) => set("time", e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="notes">Notes for <br/> the courier</label>
                                    <textarea id="notes" cols="30" rows="10" value={notes} onChange={(e) => set("notes", e.target.value)}></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="btn__box--form">
                    <button onClick={() => set("step", 2)}>Back</button>
                    <button onClick={() => set("step", 4)}>Next</button>
                </div>

            </div>
        </div>
    )
}
export default Page4;