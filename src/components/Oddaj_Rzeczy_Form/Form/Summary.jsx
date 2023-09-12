import tshirt from "./../../../assets/Icon-1.svg"
import recycle from "./../../../assets/Icon-4.svg"

const Summary = ({numberBags, products, selectLocation, address, city, zipCode, phone, date, time, notes}) => {
    return (
        <div>
            <div className="form__container--section">
                <div>
                    <h2 className="step2__hdl">Summary of Your Donation:</h2>
                    <div className="summary__box">
                        <div>
                            <h3>Donate:</h3>
                            <div>
                                <img src={tshirt} alt="T-shirt sign"/>
                                <p> {numberBags} bags, {products} </p>
                            </div>
                            <div>
                                <img src={recycle} alt="Recycle sign"/>
                                <p> localization: {selectLocation} </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Pickup address:</h3>
                                <p>Street {address}</p>
                                <p>City {city}</p>
                                <p>Zip code {zipCode}</p>
                                <p>Phone number {phone}</p>
                            </div>
                            <div>
                                <h3>Pickup date:</h3>
                                <p>Date {date}</p>
                                <p>Time {time}</p>
                                <p>Notes {notes}</p>
                            </div>
                        </div>
                    </div>
                    <div className="btn__box--form">
                        <button>Back</button>
                        <button>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Summary;