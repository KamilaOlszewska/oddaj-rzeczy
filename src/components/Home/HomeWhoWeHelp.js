import {useState} from 'react';
import StyledHeader from "../elements/StyledHeader";
import Organizations from "../WhoWeHelp/Organizations";
import Foundations from "../WhoWeHelp/Foundations";
import Local from "../WhoWeHelp/Local";

const HomeWhoWeHelp = () => {
    const [foundations, setFoundations] = useState([<Foundations/>]);
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

    return (
        <>
        <div id="homeWhoWeHelp" className="container home-who-we-help">
            <div className="is-one-third">
                <StyledHeader nameFirstHalf="Komu pomagamy?" nameSecondHalf=""/>
                <div className="home-who-we-help-buttons-box">
                    <button
                        className="home-who-we-help-button"
                        onClick={()=> showFoundations()}
                    >
                        Fundacjom
                    </button>
                    <button
                        className="home-who-we-help-button"
                        onClick={()=>showOrganizations()}
                    >
                        Organizacjom<br/>pozarządowym
                    </button>
                    <button
                        className="home-who-we-help-button"
                        onClick={()=>showLocal()}
                    >
                        Lokalnym<br/>zbiórkom
                    </button>
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