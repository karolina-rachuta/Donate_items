import {useContext, useState} from "react";
import {FormContext} from "../FormGive.jsx";

const Page1 = () => {
    const { forms: {  products }, set } = useContext(FormContext);

    const handleSelect = (e) => {
        set("products", e.target.value)
    }
    return (
        <div>
            <div className="important__container">
                <span>Important!</span>
                <p>Provide the address and pickup date and time</p>
            </div>
            <div className="form__container--section">
                <div>
                    <p className="form__text--step">Step 1/4</p>
                    <h2 className="step2__hdl">Select what you want to donate</h2>
                    <>
                        <div className="radio">
                            <input type="radio" id="option1" value="clothes suitable for reuse" name="products" onClick={handleSelect}
                                   checked={products === "clothes suitable for reuse"}/>
                            <label htmlFor="option1"> clothes suitable for reuse</label>
                        </div>
                        <div className="radio">
                            <input type="radio" id="option2" value="clothes to discard" name="products" onClick={handleSelect}
                                   checked={products === "clothes to discard"}/>
                            <label htmlFor="option2"> clothes to discard</label>
                        </div>
                        <div className="radio">

                            <input type="radio" id="option3" value="toys" name="products" onClick={handleSelect}
                                   checked={products === "toys"}/>
                            <label htmlFor="option3"> toys</label>
                        </div>
                        <div className="radio">
                            <input type="radio" id="option4" value="books" name="products" onClick={handleSelect}
                                   checked={products === "books"}/>
                            <label htmlFor="option4"> books</label>
                        </div>
                        <div className="radio">
                            <input type="radio" id="option5" value="other" name="products" onClick={handleSelect}
                                   checked={products === "other"}/>
                            <label htmlFor="option5"> other</label>
                        </div>
                    </>
                </div>
                <button onClick={() => set("step", 1)}>Next</button>
            </div>
        </div>
    )
}
export default Page1;