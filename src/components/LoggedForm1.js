import React, {useContext} from 'react';
import {FormContext} from "./FormsContext";

const LoggedForm1 = () => {
    // const [formsData, setFormsData]=useContext(FormContext);

    // const handleChange = (e) =>{
    //     const isChecked = e.target.checked;
    //     const name = e.target.name;
    //     setFormsData(prev =>{
    //         return {
    //             ...prev,
    //             [name]: isChecked
    //         }
    //     }
    //     )
    // }
    return (
        <div>
            <h3 className="step-number">Krok 1/4</h3>

            <h2 className="step-title">Zaznacz co chcesz oddać:</h2>

            <label className="checkbox-container">ubrania, które nadają się do ponownego użycia
                <input type="checkbox" id="clothesGoodToWear"
                       // checked={formsData.clothesGoodToWear}
                       name="clothesGoodToWear"
                       // onChange={handleChange}
                />
                <span className="checkmark"/>
            </label>

            <label className="checkbox-container">ubrania, do wyrzucenia
                <input type="checkbox" id="clothesDamaged" name="clothesDamaged"
                       // checked={formsData.clothesDamaged}
                       // onChange={handleChange}
                />
                <span className="checkmark"/>
            </label>

            <label className="checkbox-container">zabawki
                <input type="checkbox" id="toys" name="toys"
                       // checked={formsData.toys}
                       // onChange={handleChange}
                />
                <span className="checkmark"/>
            </label>

            <label className="checkbox-container">książki
                <input type="checkbox" id="books" name="books"
                       // checked={formsData.books} onChange={handleChange}
                />
                <span className="checkmark"/>
            </label>

            <label className="checkbox-container">Inne
                <input type="checkbox" id="otherThings" name="otherThings"
                       // checked={formsData.otherThings} onChange={handleChange}
                />
                <span className="checkmark"/>
            </label>

        </div>
    );
};

export default LoggedForm1;