import HomeHeader from "./HomeHeader.jsx";
import HomeThreeColumns from "./HomeThreeColumns.jsx";
import AboutUs from "./AboutUs.jsx";
import OddajRzeczy from "./OddajRzeczy.jsx";
import Organizations from "./Organizations.jsx";
import Contact from "./Contact.jsx";

// eslint-disable-next-line react/prop-types
const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <OddajRzeczy />
            <AboutUs/>
            <Organizations />
            <Contact />
        </>
    )
}
export default Home;