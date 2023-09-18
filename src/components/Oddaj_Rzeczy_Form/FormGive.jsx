import Page1 from "./Form/Page1.jsx";
import Page2 from "./Form/Page2.jsx";
import Page3 from "./Form/Page3.jsx";
import Page4 from "./Form/Page4.jsx";
import Summary from "./Form/Summary.jsx";
import ThankYou from "./Form/ThankYou.jsx";
import {createContext, useState} from "react";

export const FormContext = createContext(null);

const FormGive = () => {

    const [forms, setForms] = useState({
        products: "",
        numberBags: "",
        selectLocation: "",
        checks: [],
        optional: "",
        step: 0,
        address: "",
        city: "",
        zipCode: "",
        phone: "",
        date: "",
        time: "",
        notes: ""
    })

    const setFormValues = (name, value) => {
        setForms(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Generate string of checked items
    const checkedItems = forms.checks.length
        ? forms.checks.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";

    const getStep = () => {
        switch (forms.step) {
            case 0:
                return <Page1 />
            case 1:
                return <Page2 />
            case 2:
                return <Page3 />
            case 3:
                return <Page4 />
            case 4:
                return  <Summary />
            case 5:
                return  <ThankYou />
        }
    }

    return (
        <div className="container">
            <FormContext.Provider value={{
                forms, set: setFormValues, checkedItems
            }}>
                {getStep()}
            </FormContext.Provider>
        </div>
    )
}
export default FormGive;