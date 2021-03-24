import React from 'react';
import Decoration from "../assets/Decoration.svg"
import ShirtIcon from "../assets/Icon-1@2x.png"
import BagIcon from "../assets/Icon-2@2x.png"
import SearchIcon from "../assets/Icon-3@2x.png"
import ReuseIcon from "../assets/Icon-4@2x.png"

const HomeSimpleSteps = () => {
    return (
        <div>
            <div className="home-simple-steps-header">
                <h3 className="home-header-text-buttons-text">Wystarczą 4 proste kroki</h3>
                <img src={Decoration}/>
            </div>
            <div className="home-simple-steps-grey-section is-flex is-justify-content-center">
                <div className="container columns">
                    <div className="column home-simple-steps-box">
                        <img className="home-simple-steps-box-icon" src={ShirtIcon}/>
                        <h4 className="home-simple-steps-box-header">Wybierz rzeczy</h4>
                        <span className="separator"></span>
                        <p className="home-simple-steps-box-text">ubrania, zabawki,<br/>sprzęt i inne</p>
                    </div>
                    <div className="column home-simple-steps-box">
                        <img className="home-simple-steps-box-icon" src={BagIcon}/>
                        <h4 className="home-simple-steps-box-header">Spakuj je</h4>
                        <span className="separator"></span>
                        <p className="home-simple-steps-box-text">skorzystaj z<br/>sworków na śmieci</p>
                    </div>
                    <div className="column home-simple-steps-box">
                        <img className="home-simple-steps-box-icon" src={SearchIcon}/>
                        <h4 className="home-simple-steps-box-header">Zadecyduj komu<br/>chcesz pomóc</h4>
                        <span className="separator"></span>
                        <p className="home-simple-steps-box-text">wybierz zaufane<br/>smiejsce</p>
                    </div>
                    <div className="column home-simple-steps-box">
                        <img className="home-simple-steps-box-icon" src={ReuseIcon}/>
                        <h4 className="home-simple-steps-box-header">Zamów kuriera</h4>
                        <span className="separator"></span>
                        <p className="home-simple-steps-box-text">kurier przyjedzie<br/>w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <div className="home-simple-steps-button-container">
                <button className="uppercase-button home-simple-steps-button">Oddaj<br/>rzeczy</button>
            </div>

        </div>
    );
};

export default HomeSimpleSteps;