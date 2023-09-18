import {useState} from "react";

const LocalCharities = () => {
    const localCharities = [
        {
            id: 1,
            name: "Lorem Ipsum1",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
        {
            id: 2,
            name: "Lorem Ipsum2",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
        {
            id: 3,
            name: "Lorem Ipsum3",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
        {
            id: 4,
            name: "Lorem Ipsum4",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3;
    const lastIndexOnThePage = currentPage * recordsPerPage;
    const firstIndexOnThePage = lastIndexOnThePage - recordsPerPage;
    const records = localCharities.slice(firstIndexOnThePage, lastIndexOnThePage);
    const numberOfPageLocalCharities = Math.ceil(localCharities.length / recordsPerPage);
    const numbers = [...Array(numberOfPageLocalCharities + 1).keys()].slice(1);

    const nextPage = (e) => {
        e.preventDefault();
        if (currentPage !== numberOfPageLocalCharities) {
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
export default LocalCharities;