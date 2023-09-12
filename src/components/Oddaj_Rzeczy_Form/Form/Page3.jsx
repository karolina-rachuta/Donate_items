import {useState} from "react";


const Page3 = () => {
    const [selectLocation, setSelectLocation] = useState("");

    const handleSelectChangeLocation = (e) => {
        setSelectLocation(e.target.value);
    };
    return (
        <div>
            <div className="important__container">
                <span>Important!</span>
                <p>If you know whom you want to help, you can enter the name of that organization in the search bar. You
                    can also filter organizations by their location or their mission.</p>
            </div>
            <div className="form__container--section">
                <div>
                    <p className="form__text--step">Step 3/4</p>
                    <form>
                        <div>
                            <div className="input__container">
                                <h2 className="step3__hdl">Localization:</h2>
                                <select value={selectLocation} onChange={handleSelectChangeLocation}>
                                    <option value="choose">location</option>
                                    <option value="Poznan">Poznan</option>
                                    <option value="Warsaw">Warsaw</option>
                                    <option value="Krakow">Krakow</option>
                                    <option value="Wroclaw">Wroclaw</option>
                                    <option value="Katowice">Katowice</option>
                                </select>
                            </div>
                            <div className="input__container">
                                <h3 className="input__hdl">Whom do you want to help?</h3>
                                <div>
                                    <input type="checkbox" id="chldren"/>
                                    <label className="checkbox-container" htmlFor="children"> children</label>
                                    <input type="checkbox" id="single-mothers"/>
                                    <label className="checkbox-container" htmlFor="single-mothers"> single
                                        mothers</label>
                                    <input type="checkbox" id="homeless"/>
                                    <label className="checkbox-container" htmlFor="homeless"> homeless</label>
                                    <br/>
                                    <input type="checkbox" id="disabled"/>
                                    <label className="checkbox-container checkbox-container--botom" htmlFor="disabled"> disabled</label>
                                    <input type="checkbox" id="senior-citizens"/>
                                    <label className="checkbox-container checkbox-container--botom" htmlFor="senior-citizens"> senior
                                        citizens</label>
                                </div>
                            </div>
                            <div className="input__container">
                                <label className="input__hdl" htmlFor="input-optional">Enter the name of a specific
                                    organization (optional).</label>
                                <input className="input-optional" type="text" id="input-optional"/>
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
export default Page3;