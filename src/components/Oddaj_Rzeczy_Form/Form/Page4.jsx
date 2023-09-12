const Page4 = () => {

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
                                    <input type="text" id="street"/>
                                </div>
                                <div>
                                    <label htmlFor="city">City</label>
                                    <input type="text" id="city"/>
                                </div>
                                <div>
                                    <label htmlFor="zipcode">Zip code</label>
                                    <input type="text" id="zipcode"/>
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone <br/> number</label>
                                    <input type="text" id="phone"/>
                                </div>
                            </div>

                            <div className="box__col">
                                <h3 className="pickup__hdl">Pickup date</h3>
                                <div>
                                    <label htmlFor="date">Date</label>
                                    <input type="text" id="date"/>
                                </div>
                                <div>
                                    <label htmlFor="">Time</label>
                                    <input type="text" id="time"/>
                                </div>
                                <div>
                                    <label htmlFor="notes">Notes for <br/> the courier</label>
                                    <textarea name="" id="notes" cols="30" rows="10"></textarea>
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