import React,{useContext,useState} from 'react';
import BackgroundForm from "../assets/Background-Form.jpeg"
import LoggedForm1 from "./LoggedForm1";
import LoggedForm2 from "./LoggedForm2";
import LoggedForm3 from "./LoggedForm3";
import LoggedForm4 from "./LoggedForm4";
import LoggedThanksMessage from "./LoggedThanksMessage";
import LoggedSummary from "./LoggedSummary";
import {FormContext} from "./FormsContext";
import {validateForm} from "./validateForm";

const LoggedForm = () => {
    const [currentPage, setCurrentPage] = useState(1);
    // const [formsData] = useContext(FormContext);


    const getCurrentForm = () => {
        switch (currentPage) {
            case 1:
                return <LoggedForm1/>
            case 2:
                return <LoggedForm2/>
            case 3:
                return <LoggedForm3/>
            case 4:
                return <LoggedForm4/>
            case 5:
                return <LoggedSummary/>
            case 6:
                return <LoggedThanksMessage/>
        }
    }

    const handleNextClick = () => {
        const validationResult = (currentPage === 1
            // , formsData
        );
        validationResult === true ? setCurrentPage(prev => prev + 1) : alert(validationResult);
        // setCurrentPage(prev => prev + 1)
    }
    return (
        <section className="survey-form">
            <div className="container">
                <div className="survey-form__wrapper">
                    <div className="form-inputs">
                        {
                            getCurrentForm()
                        }
                    </div>
                    <div className="form-navigation">
                        {
                            ![1, 6].includes(currentPage) &&
                            <button className="form-navigation__button btn" onClick={() => setCurrentPage(prev => prev - 1)}>Wstecz</button>
                        }
                        {
                            ![5, 6].includes(currentPage) && <button className="form-navigation__button btn" onClick={handleNextClick}>Dalej</button>
                        }
                        {
                            [5].includes(currentPage) &&
                            <button className="form-navigation__button btn" onClick={() => setCurrentPage(prev => prev + 1)}>Potwierdzam</button>
                        }
                    </div>
                </div>
            </div>
        </section>

    );
};

export default LoggedForm;