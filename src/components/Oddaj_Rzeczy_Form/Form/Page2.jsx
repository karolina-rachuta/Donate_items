import { useContext } from 'react';
import { FormContext } from '../FormGive.jsx';

const Page2 = () => {
    const {
        forms: { numberBags },
        set,
    } = useContext(FormContext);

    const handleSelectNumberOfBags = (e) => {
        set('numberBags', e.target.value);
    };
    return (
        <div>
            <div className="important__container">
                <span>Important!</span>
                <p>
                    Pack all items for donation in 60-liter bags. You can find
                    detailed instructions on how to pack your items correctly
                    HERE.
                </p>
            </div>
            <div className="form__container--section">
                <div>
                    <p className="form__text--step">Step 2/4</p>
                    <h2 className="step2__hdl">
                        Please provide the number of 60-liter bags <br />
                        you have packed your items in:
                    </h2>
                    <>
                        <div className="select">
                            <label>Number of 60-liter bags:</label>
                            <select
                                value={numberBags}
                                onChange={handleSelectNumberOfBags}
                            >
                                <option value="choose">select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </>
                </div>
                <div className="btn__box--form">
                    <button onClick={() => set('step', 0)}>Back</button>
                    <button onClick={() => set('step', 2)}>Next</button>
                </div>
            </div>
        </div>
    );
};
export default Page2;
