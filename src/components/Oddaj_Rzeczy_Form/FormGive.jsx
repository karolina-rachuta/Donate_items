import Page1 from "./Form/Page1.jsx";
import Page2 from "./Form/Page2.jsx";
import Page3 from "./Form/Page3.jsx";
import Page4 from "./Form/Page4.jsx";
import Summary from "./Form/Summary.jsx";
import ThankYou from "./Form/ThankYou.jsx";
import {useState} from "react";

const FormGive = () => {
    const [products, setProducts] = useState("");
    const [numberBags, setNumberBags] = useState("");
    const [selectLocation, setSelectLocation] = useState("");

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [notes, setNotes] = useState("");

    return (
        <div className="container">
            <Page1 products={products} setProducts={setProducts}/>
            <Page2 numberBags={numberBags} setNumberBags={setNumberBags}/>
            <Page3 selectLocation={selectLocation} setSelectLocation={setSelectLocation}/>
            <Page4 address={address} setAddress={setAddress} city={city} setCity={setCity} zipCode={zipCode} setZipCode={setZipCode} phone={phone} setPhone={setPhone} date={date} setDate={setDate} time={time} setTime={setTime} notes={notes} setNotes={setNotes}/>
            <Summary products={products} numberBags={numberBags} selectLocation={selectLocation} address={address} city={city} zipCode={zipCode} phone={phone} date={date} time={time} notes={notes}/>
            <ThankYou />
        </div>
    )
}
export default FormGive;