import decoration from "../../assets/Decoration.svg";


const FormHero = () => {
    return (
        <div>
            <div className="formHero__container">
                <div className="formHero__box">
                    <p className="formHero__hdl">Give items you do not need <br/>to those in need</p>
                    <img src={decoration} alt="Decoration"/>
                    <p className="formHero__lead">Four simple steps are enough:</p>
                    <div className="formHero__rhombus">
                        <div><p>1 <br/> Choose <br/> items</p></div>
                        <div><p>2 <br/> Pack <br/> in bags</p></div>
                        <div><p>3 <br/> Choose <br/> charity</p></div>
                        <div><p>4 <br/> Arrange <br/> delivery</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormHero;