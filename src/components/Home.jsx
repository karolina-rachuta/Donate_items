import HomeHeader from "./Home/HomeHeader.jsx";
import HomeThreeColumns from "./Home/HomeThreeColumns.jsx";
import AboutUs from "./Home/AboutUs.jsx";
import OddajRzeczy from "./Home/OddajRzeczy.jsx";
import Organizations from "./Home/Organizations.jsx";
import Contact from "./Home/Contact.jsx";

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