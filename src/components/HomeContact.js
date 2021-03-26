import React from 'react';
import BackgroundImage from "../assets/BackgroundImage@2x.png";
import Decoration from "../assets/Decoration.svg";


const Button = (props)=>{
    return(<>
        <button>{props.name}</button>
        <img src={Decoration}/>
        </>
    )
}

const HomeContact = () => {
    const dupa = "Wpisz swoje imię debilu";
    return (
            <div
                className="home-contact-section columns"
                style={{backgroundImage:`url(${BackgroundImage})`}}
            >
                <div className="column is-three-fifths"></div>
                <div className="column is-two-fifths">
                    <div className="is-flex is-flex-direction-column is-justify-content-center">
                        <h3 className="home-header-text-buttons-text">
                            Skontaktuj się z nami
                        </h3>
                        <img  className="fancy-selector" src={Decoration}/>
                    </div>
                    <form>
                        <div>
                        <div>
                        <label>Wpisz swoje imię</label>
                            <input/>
                        </div>
                        <div>
                            <label>Wpisz swój email</label>
                            <input/>
                        </div>
                        </div>
                        <label>Wpisz swoją wiadomość</label>
                    </form>

                </div>
            </div>
    );
};

export default HomeContact;