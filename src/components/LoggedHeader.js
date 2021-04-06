import React from 'react';
import {Link} from "react-router-dom";
import HomeMainNavigation from "./HomeMainNavigation";
import LoggedBackground from "../assets/Form-Hero-Image.jpeg"
import StyledHeader from "./elements/StyledHeader";

const LoggedHeaderStepBox=(props)=>{
    return(
        <div className="logged-header-step-box">
            <div className="cancel-transformation">
            <h6 className="logged-header-step-box-number">{props.number}</h6>
            <h6 className="logged-header-step-box-text">{props.descriptionOne}</h6><br/>
            <h6 className="logged-header-step-box-text">{props.descriptionTwo}</h6>
            </div>
        </div>
    )
}

const LoggedHeader = () => {
    return (
        <div>
            <div className="columns  logged-header-empty-nav-column">
                <div className="column"></div>
                <div className="column"><div className="is-flex is-flex-direction-column home-header-nav-bar">
                    <div className="is-flex is-align-self-flex-end home-header-nav-login">
                        <Link  to="/logowanie"><p className="home-header-nav-bar-element">Zaloguj</p></Link>
                        <Link  to="/rejestracja"><p className="home-header-nav-bar-element">Załóż konto</p></Link>
                    </div>
                    <HomeMainNavigation/>
                </div>
                </div>
            </div>
            <div className="columns logged-header-whole-content-with-photo">
                <div className="column logged-header-photo-background-box">
                    <img className="column logged-header-photo-background" src={LoggedBackground}/>
                </div>
                <div className="column logged-header-content-box">
                    <StyledHeader nameFirstHalf="Oddaj rzeczy, których już nie chcesz" nameSecondHalf="POTRZEBUJĄCYM"/>

                    <div className="logged-header-steps-content-box is-flex is-flex-direction-column is-justify-content-center has-text-centered">
                        <h5 className="logged-header-steps-content-box-header">Wystarczą 4 proste kroki: </h5>
                    <div className="is-flex logged-header-steps-box is-justify-content-space-between">
                        <LoggedHeaderStepBox number="1" descriptionOne="Wybierz" descriptionTwo="rzeczy"/>
                        <LoggedHeaderStepBox number="2" descriptionOne="Spakuj je" descriptionTwo="w worki"/>
                        <LoggedHeaderStepBox number="3" descriptionOne="Wybierz" descriptionTwo="fundację"/>
                        <LoggedHeaderStepBox number="4" descriptionOne="Zamów" descriptionTwo="kuriera"/>
                    </div>

                    </div>
                </div>
            </div>
            <div className="logged-header-yellow-bar">
                <div className="container">
                    <h2 className="logged-header-yellow-bar-header">Ważne!</h2>
                    <p className="logged-header-yellow-bar-paragraph">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </div>
            </div>
        </div>
    );
};

export default LoggedHeader;