import ShirtIcon from "../../assets/Icon-1@2x.png"
import BagIcon from "../../assets/Icon-2@2x.png"
import SearchIcon from "../../assets/Icon-3@2x.png"
import ReuseIcon from "../../assets/Icon-4@2x.png"
import UppercaseButton from "../elements/UppercaseButton";
import StyledHeader from "../elements/StyledHeader";
import {Link} from "react-router-dom";


const SimpleStep = (props)=>{
    return(
        <div className="column home-simple-steps-box">
        <img className="home-simple-steps-box-icon" src={props.image}/>
        <h4 className="home-simple-steps-box-header">
            {props.titleFirstPart}<br/>{props.titleSecondPart}
        </h4>
        <span className="separator"></span>
        <p className="home-simple-steps-box-text">
            {props.paragraphFirstPart}<br/>{props.paragraphSecondPart}
        </p>
        </div>
    )
}
const HomeSimpleSteps = () => {
    return (
        <div id="homeSimpleSteps">
            <StyledHeader
                nameFirstHalf="Wystarczą 4 proste kroki"
                nameSecondHalf=""/>
            <div className="home-simple-steps-grey-section is-flex is-justify-content-center">
                <div className="container columns">
                    <SimpleStep
                        image={ShirtIcon}
                        titleFirstPart="Wybierz rzeczy"
                        titleSecondPart=""
                        paragraphFirstPart="ubrania, zabawki"
                        paragraphSecondPart="sprzęt i inne"/>
                    <SimpleStep
                        image={BagIcon}
                        titleFirstPart="Spakuj je"
                        titleSecondPart=""
                        paragraphFirstPart="skorzystaj z"
                        paragraphSecondPart="worków na śmieci"/>
                    <SimpleStep
                        image={SearchIcon}
                        titleFirstPart="Zadecyduj komu"
                        titleSecondPart="chcesz pomóc"
                        paragraphFirstPart="wybierz zaufane"
                        paragraphSecondPart="miejsce"/>
                    <SimpleStep
                        image={ReuseIcon}
                        titleFirstPart="Zamów kuriera"
                        titleSecondPart=""
                        paragraphFirstPart="kurier przyjedzie"
                        paragraphSecondPart="w dogodnym terminie"/>
                </div>
            </div>
            <div className="home-simple-steps-button-container">
                <Link  to="/logowanie">
                    <UppercaseButton
                        class="home-simple-steps-button"
                        nameFirstPart="Oddaj"
                        nameSecondPart="rzeczy"/>
                </Link>
            </div>
        </div>
    );
};

export default HomeSimpleSteps;