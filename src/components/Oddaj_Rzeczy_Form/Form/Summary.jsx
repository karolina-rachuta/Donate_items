import tshirt from "./../../../assets/Icon-1.svg"
import recycle from "./../../../assets/Icon-4.svg"
import {useContext} from "react";
import {FormContext} from "../FormGive.jsx";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../../firebase.js'
import {useUser} from "../../../AuthProvider.jsx";

const Summary = () => {
    const {forms , set, checkedItems} = useContext(FormContext);
    const user = useUser()
    const {numberBags, products, selectLocation, optional, address, city, zipCode, phone, date, time, notes} = forms
    const confirm = async () => {
        await setDoc(doc(db, "form", new Date().toISOString()), {...forms, user: user.uid});
        await set("step", 5)
    }
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
                        <button onClick={() => confirm()}>Confirm</button>
                </div>
            </div>
        </div>
    )
}
export default Summary;