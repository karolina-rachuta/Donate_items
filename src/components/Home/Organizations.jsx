import decoration from "../../assets/Decoration.svg"
import LocalCharities from "./Organizations/LocalCharities.jsx";
import OrganizationCharities from "./Organizations/OrganizationCharities.jsx";
import Foundations from "./Organizations/Foundations.jsx";
import {useState} from "react";

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
        <div className="container" id="organizations">
            <div className="container__pagination">
                <h1>Whom do we help?</h1>
                <img src={decoration} alt="Decoration"/>
                <div className="option__box">
                    <div onClick={() => setPage(0)} className={page === 0 ? 'active' : undefined}>Foundations</div>
                    <div onClick={() => setPage(1)} className={page === 1 ? 'active' : undefined}>Organizations</div>
                    <div onClick={() => setPage(2)} className={page === 2 ? 'active' : undefined}>Local Charities</div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam doloribus facere fugiat in
                    libero maiores natus obcaecati velit veniam. Aliquam autem dicta eaque eos explicabo inventore
                    perspiciatis ratione, rerum ut.5</p>

                {getPage()}
            </div>
        </div>
    )
}
export default Organizations;