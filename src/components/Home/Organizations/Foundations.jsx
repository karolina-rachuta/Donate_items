import {useState} from "react";

const Foundations = () => {
    const foundation = [
        {
            id: 1,
            name: "Foundation Best Health1",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
        {
            id: 2,
            name: "Foundation Children2",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },

        {
            id: 3,
            name: "Foundation Best Health3",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
        {
            id: 4,
            name: "Foundation Best Health4",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
        {
            id: 5,
            name: "Foundation Best Health5",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
        {
            id: 6,
            name: "Foundation Best Health6",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
        {
            id: 7,
            name: "Foundation Best Health7",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },
        {
            id: 8,
            name: "Foundation Best Health8",
            mission: "Assisting individuals facing difficult life situations.",
            needs: "clothing, food, home appliances, furniture, toys"
        },

    ]

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3;
    const lastIndexOnThePage = currentPage * recordsPerPage;
    const firstIndexOnThePage = lastIndexOnThePage - recordsPerPage;
    const records = foundation.slice(firstIndexOnThePage, lastIndexOnThePage);
    const numberOfPagesFoundation = Math.ceil(foundation.length / recordsPerPage);
    const numbersFoundation = [...Array(numberOfPagesFoundation + 1).keys()].slice(1);

    const nextPage = (e) => {
        e.preventDefault();
        if (currentPage !== numberOfPagesFoundation) {
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
        <div className="container__option">
            <div>
                {records.map((item) => {
                    return (

                        <div className="box__map" key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.mission}</p>
                            <div><p>{item.needs}</p></div>
                        </div>
                    )
                })}
            </div>
            <nav>
                <ul className="box__pages">
                    <li><a href="#" onClick={prePage}>Prev</a></li>

                    {numbersFoundation.map((number, index) => (
                        <li key={index}><a href="#" onClick={(e) => changeCurrentPage(number, e)}>{number}</a></li>
                    ))}

                    <li><a href="#" onClick={nextPage}>Next</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Foundations;