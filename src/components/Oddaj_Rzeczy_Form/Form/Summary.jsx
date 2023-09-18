import tshirt from "./../../../assets/Icon-1.svg"
import recycle from "./../../../assets/Icon-4.svg"
import {useContext} from "react";
import {FormContext} from "../FormGive.jsx";

const Summary = () => {
    const {forms : {numberBags, products, selectLocation, optional, address, city, zipCode, phone, date, time, notes}, set, checkedItems} = useContext(FormContext);
    return (
        <div>
            <div className="form__container--section">
                    <h2 className="summary__hdl">Summary of Your Donation:</h2>
                    <div className="summary__box">
                        <div className="summary__box--first">
                            <h3 className="summary__hdl3">Donate:</h3>
                            <div className="summary__box--row">
                                <img src={tshirt} alt="T-shirt sign"/>
                                <p> {numberBags} bags, {products}, {checkedItems} </p>
                            </div>
                            <div className="summary__box--row">
                                <img src={recycle} alt="Recycle sign"/>
                                <p> localization: {selectLocation} {optional} </p>
                            </div>
                        </div>
                        <div className="summary__box--second">
                            <div className="summary__box--row">
                                <h3 className="summary__hdl3">Pickup address:</h3>
                                <p>Street: {address}</p>
                                <p>City: {city}</p>
                                <p>Zip code: {zipCode}</p>
                                <p>Phone number: {phone}</p>
                            </div>
                            <div className="summary__box--row">
                                <h3 className="summary__hdl3">Pickup date:</h3>
                                <p>Date: {date}</p>
                                <p>Time: {time}</p>
                                <p>Notes: {notes}</p>
                            </div>
                        </div>
                    </div>
                    <div className="btn__box--form">
                        <button onClick={() => set("step", 3)}>Back</button>
                        <button onClick={() => set("step", 5)}>Confirm</button>
                </div>
            </div>
        </div>
    )
}
export default Summary;