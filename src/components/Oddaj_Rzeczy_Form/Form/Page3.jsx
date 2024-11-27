import { useContext, useState } from 'react';
import { FormContext } from '../FormGive.jsx';

const Page3 = () => {
    const {
        forms: { selectLocation, checks, optional },
        set,
    } = useContext(FormContext);
    const checkList = [
        'children',
        'single mothers',
        'homeless',
        'disabled',
        'senior citizens',
    ];
    const handleSelectChangeLocation = (e) => {
        set('selectLocation', e.target.value);
    };
    // Add/Remove checked item from list
    const handleCheck = (e) => {
        let updatedList = [...checks];
        if (e.target.checked) {
            updatedList = [...checks, e.target.value];
        } else {
            updatedList.splice(checks.indexOf(e.target.value), 1);
        }
        set('checks', updatedList);
    };

    return (
        <div>
            <div className="important__container">
                <span>Important!</span>
                <p>
                    If you know whom you want to help, you can enter the name of
                    that organization in the search bar. You can also filter
                    organizations by their location or their mission.
                </p>
            </div>
            <div className="form__container--section">
                <div>
                    <p className="form__text--step">Step 3/4</p>
                    <form>
                        <div>
                            <div className="input__container">
                                <h2 className="step3__hdl">Localization:</h2>
                                <select
                                    value={selectLocation}
                                    onChange={handleSelectChangeLocation}
                                >
                                    <option value="choose">location</option>
                                    <option value="Poznan">Poznan</option>
                                    <option value="Warsaw">Warsaw</option>
                                    <option value="Krakow">Krakow</option>
                                    <option value="Wroclaw">Wroclaw</option>
                                    <option value="Katowice">Katowice</option>
                                </select>
                            </div>
                            <div className="input__container">
                                <h3 className="input__hdl">
                                    Whom do you want to help?
                                </h3>
                                <div className="checkbox__container">
                                    {checkList.map((item, index) => (
                                        <div key={index}>
                                            <input
                                                value={item}
                                                type="checkbox"
                                                onChange={handleCheck}
                                                id={item}
                                            />
                                            <label
                                                className="checkbox-container"
                                                htmlFor={item}
                                            >
                                                {item}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="input__container">
                                <label
                                    className="input__hdl"
                                    htmlFor="input-optional"
                                >
                                    Enter the name of a specific organization
                                    (optional).
                                </label>
                                {
                                    <input
                                        className="input-optional"
                                        type="text"
                                        id="input-optional"
                                        value={optional}
                                        onChange={(e) =>
                                            set('optional', e.target.value)
                                        }
                                    />
                                }
                            </div>
                        </div>
                    </form>
                </div>
                <div className="btn__box--form">
                    <button onClick={() => set('step', 1)}>Back</button>
                    <button onClick={() => set('step', 3)}>Next</button>
                </div>
            </div>
        </div>
    );
};
export default Page3;
