import React from 'react';
import Decoration from "../assets/Decoration.svg"
import HeaderBackground from "../assets/HeroImage.png"
import UppercaseButton from "./elements/AllButtons";

const HomeHeader = () => {
    return (
        <div className="columns no-margin mb-0 mt-0">
            <div
                className="home-header-banner column is-half"
                 style={{backgroundImage:`url(${HeaderBackground})`}}
            />
            <div className="column is-half is-flex is-flex-direction-column home-header-content">
                <div className="is-flex is-flex-direction-column home-header-nav-bar">
                <div className="is-flex is-align-self-flex-end home-header-nav-login">
                    <p className="home-header-nav-bar-element">Zaloguj</p>
                    <p className="home-header-nav-bar-element">Załóż konto</p>
                </div>
                <ul className="is-flex home-header-nav-menu">
                    <li className="home-header-nav-menu-element">Start</li>
                    <li className="home-header-nav-menu-element">O co chodzi?</li>
                    <li className="home-header-nav-menu-element">O nas</li>
                    <li className="home-header-nav-menu-element">Fundacja i organizacje</li>
                    <li className="home-header-nav-menu-element">Kontakt</li>
                </ul>
                </div>

            <div className="is-flex is-flex-direction-column home-header-text-buttons">
                <div className="is-flex is-flex-direction-column is-justify-content-center">
                    <h3 className="home-header-text-buttons-text">
                        Zacznij pomagać!<br/>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h3>
                    <img  className="fancy-selector" src={Decoration}/>
                </div>
                <div className="is-flex columns has-text-centered home-header-buttons-box">
                    <UppercaseButton class="column is-half" nameFirstPart="Oddaj" nameSecondPart="rzeczy"/>
                    <UppercaseButton class="column is-half" nameFirstPart="Zorganizuj" nameSecondPart="zbiórkę"/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeHeader;