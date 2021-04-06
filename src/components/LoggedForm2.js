import React,{useContext} from 'react';
import {FormContext} from "./FormsContext";


const LoggedForm2 = () => {
    // const [formsData, setFormsData] = useContext(FormContext);

    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     const name = e.target.name;
    //     setFormsData(prev => {
    //             return {
    //                 ...prev,
    //                 [name]: value
    //             }
    //         }
    //     )
    // }
    return (
        <div>
            <h3 className="step-number">Krok 2/4</h3>
            <h2 className="step-title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <div>
                <label htmlFor="noOfBags">Liczba 60l worków:</label>

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
    );
};

export default LoggedForm2;