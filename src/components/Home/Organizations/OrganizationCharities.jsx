import {useState} from "react";

const OrganizationCharities = () => {

    const organizations = [
        {
            id: 1,
            name: "Organization Best Health1",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
        {
            id: 2,
            name: "Organization Children2",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },

        {
            id: 3,
            name: "Organization Best Health3",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
        {
            id: 4,
            name: "Organization Best Health4",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
        {
            id: 5,
            name: "Organization Best Health5",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
        {
            id: 6,
            name: "Organization Best Health6",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
    ]

    const [currentPage, setCurrentPage] = useState(1);
    // how many cards on every page
    const recordsPerPage = 3;
    const lastIndexOnThePage = currentPage * recordsPerPage;
    const firstIndexOnThePage = lastIndexOnThePage - recordsPerPage;
    const records = organizations.slice(firstIndexOnThePage, lastIndexOnThePage);
    const numberOfPages = Math.ceil(organizations.length / recordsPerPage);
    // numbers which we will see on the bottom of the table
    const numbers = Array.from({length: numberOfPages}).map((_, index) => index + 1);

    const nextPage = (e) => {
        e.preventDefault();
        if (currentPage !== numberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const changeCurrentPageOrganization = (page) => {
        setCurrentPage(page);
    }


    return (
        <div className="container__option">
            <div>
                {records.map((item) => {
                    return (
                        <div className="box__map" key={item.id}>
                            <div className="box__map1"><h2>{item.name}</h2>
                                <p>{item.mission}</p>
                            </div>
                            <div className="box__map1">
                                <p>{item.needs}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ul className="box__pages">
                <li onClick={prePage}>Prev</li>

                {numbers.map((number, index) => (
                    <li key={index} onClick={() => changeCurrentPageOrganization(number)}
                        className={number === currentPage ? 'active' : undefined}>{number}</li>
                ))}

                <li onClick={nextPage}>Next</li>
            </ul>
        </div>
    )
}
export default OrganizationCharities;