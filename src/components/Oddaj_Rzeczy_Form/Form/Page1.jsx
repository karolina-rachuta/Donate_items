import {useState} from "react";

const Page1 = ({products, setProducts}) => {


    const handleSelect = (e) => {
        setProducts(e.target.value)
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
                    <form>
                        <div className="radio">
                            <input type="radio" id="option1" value="clothes suitable for reuse" name="products" onClick={handleSelect}
                                   checked={products === "clothes suitable for reuse"}/>
                            <label htmlFor="option1"> clothes suitable for reuse</label>
                        </div>
                        <div className="radio">
                            <input type="radio" id="option2" value="option2" name="products" onClick={handleSelect}
                                   checked={products === "option2"}/>
                            <label htmlFor="option2"> clothes to discard</label>
                        </div>
                        <div className="radio">

                            <input type="radio" id="option3" value="option3" name="products" onClick={handleSelect}
                                   checked={products === "option3"}/>
                            <label htmlFor="option3"> toys</label>
                        </div>
                        <div className="radio">
                            <input type="radio" id="option4" value="option4" name="products" onClick={handleSelect}
                                   checked={products === "option4"}/>
                            <label htmlFor="option4"> books</label>
                        </div>
                        <div className="radio">
                            <input type="radio" id="option5" value="option5" name="products" onClick={handleSelect}
                                   checked={products === "option5"}/>
                            <label htmlFor="option5"> other</label>
                        </div>
                    </form>
                </div>
                <button>Next</button>
            </div>
        </div>
    )
}
export default Page1;