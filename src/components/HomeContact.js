import React from 'react';
import BackgroundImage from "../assets/BackgroundImage@2x.png";
import Decoration from "../assets/Decoration.svg";
import StyledHeader from "./elements/StyledHeader";


const Button = (props)=>{
    return(<>
        <button>{props.name}</button>
        <img src={Decoration}/>
        </>
    )
}

const HomeContact = () => {
    return (

            <div
                className="home-contact-section"
                style={{backgroundImage:`url(${BackgroundImage})`, backgroundSize: "cover"}}
            >
            <div
                className="columns"
            >
                <div className="column is-three-fifths"></div>
                <div className="column is-two-fifths">
                    <StyledHeader nameFirstHalf="Skontaktuj się z nami" nameSecondHalf=""/>
                    <form>
                        <div className="is-flex">
                            <div className="is-flex is-flex-direction-column">
                            <label>Wpisz swoje imię</label>
                            <input/>
                            </div>
                            <div className="is-flex is-flex-direction-column">
                            <label>Wpisz swój email</label>
                            <input/>
                            </div>
                        </div>
                        <div className="is-flex is-flex-direction-column">
                        <label>Wpisz swoją wiadomość</label>
                        <input type="text"/>
                        </div>
                        <button>Wyślij</button>
                    </form>

                </div>

            </div>
                <div className="columns">
                <div className="column is-flex is-justify-content-space-between">
                    <h1>.</h1>
                    <h1>Copyright by CodersLab</h1>
                    <h1>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-instagram-square"></i>
                    </h1>

                </div>
                </div>
        </div>

    );
};

export default HomeContact;