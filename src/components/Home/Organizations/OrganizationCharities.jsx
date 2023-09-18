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
    const numbers = [...Array(numberOfPages + 1).keys()].slice(1);

    const nextPage = (e) => {
        e.preventDefault();
        if (currentPage !== numberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prePage = (e) => {
        e.preventDefault()
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const changeCurrentPage = (e, id) => {
        e.preventDefault()
        setCurrentPage(id);
    }


    return (
        <div>
            <div>
                {records.map((item) => {
                    return (

                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.mission}</p>
                            <p>{item.needs}</p>
                        </div>
                    )
                })}
            </div>
            <nav>
                <ul>
                    <li><a href="#" onClick={prePage}>Prev</a></li>

                    {numbers.map((number, index) => (
                        <li key={index}><a href="#" onClick={(e) => changeCurrentPage(number, e)}>{number}</a></li>
                    ))}

                    <li><a href="#" onClick={nextPage}>Next</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default OrganizationCharities;