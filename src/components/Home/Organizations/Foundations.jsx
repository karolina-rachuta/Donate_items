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


    return (
        <div>
            <div>
                {foundation.map((item) => {
                    return (

                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.mission}</p>
                            <p>{item.needs}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Foundations;