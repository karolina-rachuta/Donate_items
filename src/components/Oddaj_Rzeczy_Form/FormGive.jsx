import Page1 from "./Form/Page1.jsx";
import Page2 from "./Form/Page2.jsx";
import Page3 from "./Form/Page3.jsx";
import Page4 from "./Form/Page4.jsx";
import Summary from "./Form/Summary.jsx";
import ThankYou from "./Form/ThankYou.jsx";

const FormGive = () => {
    return (
        <div className="container">
            <Page1/>
            <Page2/>
            <Page3/>
            {/*<Page4/>*/}
            <Summary/>
            <ThankYou />
        </div>
    )
}
export default FormGive;