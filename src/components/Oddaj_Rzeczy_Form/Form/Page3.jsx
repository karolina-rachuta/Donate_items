import {useState} from "react";


const Page3 = () => {
    const [choose, setChoose] = useState("");

    const handleSelectChange = (e) => {
        setChoose(e.target.value);
    };
    return (
        <div>
            <div className="important__container">
                <span>Important!</span>
                <p>If you know whom you want to help, you can enter the name of that organization in the search bar. You can also filter organizations by their location or their mission.</p>
            </div>
            <div className="form__container--section">
                <p className="form__text--step">Step 3/4</p>
                <h2>Please provide the number of 60-liter bags <br/>
                    you have packed your items in:</h2>
                <form>
                    <div className="select">
                        <h3>Localization:</h3>
                        <select value={choose} onChange={handleSelectChange}>
                            <option value="choose">location</option>
                            <option value="Poznan">Poznan</option>
                            <option value="Warsaw">Warsaw</option>
                            <option value="Krakow">Krakow</option>
                            <option value="Wroclaw">Wroclaw</option>
                            <option value="Katowice">Katowice</option>
                        </select>
                    </div>
                    <div className="checkbox">
                        <h4>Whom do you want to help?</h4>
                            <input type="checkbox" id="myCheckbox1"/>
                            <label className="checkbox-container" htmlFor="myCheckbox1">  Tekst w kwadracie checkbox</label>
                    </div>
                </form>
                <div className="btn__box--form">
                    <button>Back</button>
                    <button>Next</button>
                </div>
            </div>
        </div>
    )
}
export default Page3;