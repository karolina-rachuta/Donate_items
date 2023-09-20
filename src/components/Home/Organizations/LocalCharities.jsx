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
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3;
    const lastIndexOnThePage = currentPage * recordsPerPage;
    const firstIndexOnThePage = lastIndexOnThePage - recordsPerPage;
    const records = localCharities.slice(firstIndexOnThePage, lastIndexOnThePage);
    const numberOfPagesLocalCharities = Math.ceil(localCharities.length / recordsPerPage);
    const numbers = Array.from({length: numberOfPagesLocalCharities}).map((_, index) => index + 1);

    // const nextPage = (e) => {
    //     e.preventDefault();
    //     if (currentPage !== numberOfPagesLocalCharities) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // }

    // const prePage = (e) => {
    //     e.preventDefault()
    //     if (currentPage !== 1) {
    //         setCurrentPage(currentPage - 1)
    //     }
    // }

    // const changeCurrentPage = (page) => {
    //     setCurrentPage(page);
    // }

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

            {/*<ul className="box__pages">*/}
            {/*    <li onClick={prePage}>Prev</li>*/}

            {/*    {numbers.map((number, index) => (*/}
            {/*        <li key={index} onClick={() => changeCurrentPage(number)} className={number === currentPage ? 'active' : undefined}>{number}>{number}</li>*/}
            {/*    ))}*/}

            {/*    <li onClick={nextPage}>Next</li>*/}
            {/*</ul>*/}

        </div>
    )
}
export default LocalCharities;