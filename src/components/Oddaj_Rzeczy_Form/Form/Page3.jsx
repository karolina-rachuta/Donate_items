import {useContext, useState} from "react";
import {FormContext} from "../FormGive.jsx";


const Page3 = () => {
    // const [children, setChildren] = useState("");
    // const [singleMothers, setSingleMothers] = useState("");
    // const [homeless, setHomeless] = useState("");
    // const [disabled, setDisabled] = useState("");
    // const [seniorCitizens, setSeniorCitizens] = useState("");


    const { forms: {  selectLocation, checks, optional }, set } = useContext(FormContext);

    const handleSelectChangeLocation = (e) => {
        set("selectLocation", e.target.value);
    };

    // const handleChooseCheckbox = (e) => {
    //     set("checks", e.target.value);
    // }

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
                                    {/*<form>*/}
                                    {/*<input type="checkbox" id="chldren" value={children} onChange={(e)=>setChildren(e.target.value)}/>*/}
                                    {/*<label className="checkbox-container" htmlFor="children"> children</label>*/}
                                    {/*<input type="checkbox" id="single-mothers" value={singleMothers}*/}
                                    {/*       onChange={(e) => setSingleMothers(e.target.value)}/>*/}
                                    {/*<label className="checkbox-container" htmlFor="single-mothers"> single*/}
                                    {/*    mothers</label>*/}
                                    {/*<input type="checkbox" id="homeless" value={homeless} onChange={(e) => setHomeless(e.target.value)}/>*/}
                                    {/*<label className="checkbox-container" htmlFor="homeless"> homeless</label>*/}
                                    {/*<br/>*/}
                                    {/*<input type="checkbox" id="disabled" value={disabled} onChange={(e) => setDisabled(e.target.value)}/>*/}
                                    {/*<label className="checkbox-container checkbox-container--botom"*/}
                                    {/*       htmlFor="disabled"> disabled</label>*/}
                                    {/*<input type="checkbox" id="senior-citizens" value={seniorCitizens} onChange={(e) => setSeniorCitizens(e.target.value)}/>*/}
                                    {/*<label className="checkbox-container checkbox-container--botom"*/}
                                    {/*       htmlFor="senior-citizens"> senior citizens</label>*/}
                                    {/*</form>*/}
                                </div>
                            </div>
                            <div className="input__container">
                                <label className="input__hdl" htmlFor="input-optional">Enter the name of a specific
                                    organization (optional).</label>
                                {<input className="input-optional" type="text" id="input-optional" value={optional} onChange={(e) => set("optional", e.target.value)}/>}
                            </div>
                        </div>
                    </form>
                </div>
                <div className="btn__box--form">
                    <button onClick={() => set("step", 1)}>Back</button>
                    <button onClick={() => set("step", 3)}>Next</button>
                </div>
            </div>
        </div>
    )
}
export default Page3;