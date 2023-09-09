const Page1 = () => {
    return (
        <div>
            <div className="important__container">
                <span>Important!</span>
                <p>Provide the address and pickup date and time</p>
            </div>
            <div>
                <p>Step 1/4</p>
                <h2>Select what you want to donate</h2>
                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option1" checked={true} />
                            Clothes suitable for reuse
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option2" />
                            Clothes to discard
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option3" />
                            toys
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option4" />
                            books
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option5" />
                            other
                        </label>
                    </div>
                </form>
                <button>Next</button>

            </div>
        </div>
    )
}
export default Page1;