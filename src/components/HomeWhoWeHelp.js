import React,{useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import StyledHeader from "./elements/StyledHeader";

const HomeWhoWeHelpTableRow = (props) => {
    return(
        <div className="home-who-we-help-choice">
            <div className="home-who-we-help-choice-left">
                <h5 className="home-who-we-help-choice-title">{props.name}</h5>
                <p className="home-who-we-help-choice-paragraph">{props.goal}</p>
            </div>
            <p className="home-who-we-help-choice-paragraph-light">{props.stuff}</p>
        </div>
    )
}
const Foundations = ()=>{
    return(
        <div className="container home-who-we-help">
            <div className="is-one-third">
                <p className="has-text-centered home-who-we-help-paragraph">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <div className="column home-who-we-help-choices-box">
                    <HomeWhoWeHelpTableRow
                        name={"Fundacja “Dbam o Zdrowie”"}
                        goal="Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej."
                        stuff="ubrania, jedzenie, sprzęt AGD, meble, zabawki"
                    />
                    <HomeWhoWeHelpTableRow
                        name={"Fundacja “Dla dzieci”"}
                        goal="Cel i misja: Pomoc dzieciom z ubogich rodzin."
                        stuff="ubrania, meble, zabawki"
                    />
                    <HomeWhoWeHelpTableRow
                        name={"Fundacja “Bez domu”"}
                        goal="Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."
                        stuff="ubrania, jedzenie, ciepłe koce"
                    />
                </div>
                <div className="home-who-we-help-buttons-box">
                    <button className="home-who-we-help-number-button">1</button>
                    <button className="home-who-we-help-number-button">2</button>
                    <button className="home-who-we-help-number-button">3</button>
                </div>
            </div>
        </div>
    )
}
const Organizations = ()=>{
    return(
        <div className="container home-who-we-help">
            <div className="is-one-third">
                <p className="has-text-centered home-who-we-help-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <div className="column home-who-we-help-choices-box">
                    <HomeWhoWeHelpTableRow
                        name={"Organizacja “Dbam o Zdrowie”"}
                        goal="Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej."
                        stuff="ubrania, jedzenie, sprzęt AGD, meble, zabawki"
                    />
                    <HomeWhoWeHelpTableRow
                        name={"Organizacja “Dla dzieci”"}
                        goal="Cel i misja: Pomoc dzieciom z ubogich rodzin."
                        stuff="ubrania, meble, zabawki"
                    />
                    <HomeWhoWeHelpTableRow
                        name={"Organizacja “Bez domu”"}
                        goal="Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."
                        stuff="ubrania, jedzenie, ciepłe koce"
                    />
                </div>
                <div className="home-who-we-help-buttons-box">
                    <button className="home-who-we-help-number-button">1</button>
                    <button className="home-who-we-help-number-button">2</button>
                    <button className="home-who-we-help-number-button">3</button>
                </div>
            </div>
        </div>
    )
}
const Local = ()=>{
    return(
        <div className="container home-who-we-help">
            <div className="is-one-third">
                <p className="has-text-centered home-who-we-help-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <div className="column home-who-we-help-choices-box">
                    <HomeWhoWeHelpTableRow
                        name={"Zbiórka “Lorem Ipsum 1”"}
                        goal="Quis varius quam quisque id diam vel quam elementum pulvinar."
                        stuff="Egestas, sed, tempus"
                    />
                    <HomeWhoWeHelpTableRow
                        name={"Zbiórka “Lorem Ipsum 2”"}
                        goal="Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."
                        stuff="Ut, aliquam, purus, sit, amet"
                    />
                    <HomeWhoWeHelpTableRow
                        name={"Zbiórka “Lorem Ipsum 3”"}
                        goal="Scelerisque in dictum non consectetur a erat nam."
                        stuff="Mi, quis, hendrerit, dolor"
                    />
                </div>
                <div className="home-who-we-help-buttons-box">
                    <button className="home-who-we-help-number-button">1</button>
                    <button className="home-who-we-help-number-button">2</button>
                    <button className="home-who-we-help-number-button">3</button>
                </div>
            </div>
        </div>
    )
}
const HomeWhoWeHelp=()=> {
    const [foundations, setFoundations] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [local, setLocal] = useState([]);

    function showFoundations(){
        setFoundations([<Foundations/>]);
        setOrganizations([])
        setLocal([])
    }
    function showOrganizations(){
        setFoundations([]);
        setOrganizations([<Organizations/>])
        setLocal([])
    }
    function showLocal(){
        setFoundations([]);
        setOrganizations([])
        setLocal([<Local/>])
    }



    return (<>

        <div id="homeWhoWeHelp" className="container home-who-we-help">
            <div className="is-one-third">
                <StyledHeader nameFirstHalf="Komu pomagamy?" nameSecondHalf=""/>
                <div className="home-who-we-help-buttons-box">
                    <button className="home-who-we-help-button"
                            onClick={()=> showFoundations()}
                    >Fundacjom</button>
                    <button className="home-who-we-help-button"
                            onClick={()=>showOrganizations()}
                    >Organizacjom<br/>pozarządowym</button>
                    <button className="home-who-we-help-button"
                            onClick={()=>showLocal()}
                    >Lokalnym<br/>zbiórkom</button>
                </div>
                <div>
                    {foundations}
                    {organizations}
                    {local}
                </div>
            </div>
        </div>

        </>
    );

};
export default HomeWhoWeHelp;