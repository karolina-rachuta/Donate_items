
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

    return (
        <div>
            <div>
                {localCharities.map((item) => {
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
export default LocalCharities;