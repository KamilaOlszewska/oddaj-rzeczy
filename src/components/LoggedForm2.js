const LoggedForm2 = () => {

    return (
        <div className="columns">
            <div className="column is-flex is-two-thirds is-flex-direction-column is-justify-content-flex-start">

            <h3 className="steps-counter">Krok 2/4</h3>
            <h2 className="logged-form-steps-header">
                Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
            </h2>
            <div>
                <label className="logged-form-2-label" htmlFor="noOfBags">
                    Liczba 60l worków:
                </label>

                <select className="select-css" name="noOfBags"
                        // value={formsData.noOfBags} onChange={handleChange}
                >
                    <option value="--wybierz--">--wybierz--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            </div>
            <div className="column"></div>
        </div>
    );
};

export default LoggedForm2;