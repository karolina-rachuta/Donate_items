import decoration from "../../assets/Decoration.svg"
import LocalCharities from "./Organizations/LocalCharities.jsx";
import OrganizationCharities from "./Organizations/OrganizationCharities.jsx";
import Foundations from "./Organizations/Foundations.jsx";
import {createContext, useState} from "react";

export const PaginationContext = createContext(null);
const Organizations = () => {
    const [page, setPage] = useState(0);

    const getPage = () => {
        switch (page) {
            case 0 :
                return <Foundations/>
            case 1:
                return <OrganizationCharities/>
            case 2:
                return <LocalCharities/>
        }
    }


    return (
        <div className="container" id="organizations" style={{height: "500px", backgroundColor: "lightcoral"}}>
            <div>
                <h1>Who do we help?</h1>
                <img src={decoration} alt="Decoration"/>
                <div>
                    <button onClick={() => setPage(0)}>Foundations</button>
                    <button onClick={() => setPage(1)}>Organizations</button>
                    <button onClick={() => setPage(2)}>Local Charities</button>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam doloribus facere fugiat in
                        libero maiores natus obcaecati velit veniam. Aliquam autem dicta eaque eos explicabo inventore
                        perspiciatis ratione, rerum ut.5</p>
                </div>
                    {getPage()}
            </div>
        </div>
    )
}
export default Organizations;