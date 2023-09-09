import Navigation from "../Navigation.jsx";
import FormHero from "./FormHero.jsx";

const FormHeader = () => {
    return (
        <header className="container formHeader__container">
            <Navigation />
            <FormHero />
        </header>
    )
}
export default FormHeader;