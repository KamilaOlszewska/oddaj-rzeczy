import StyledHeader from "../elements/StyledHeader";
import {Link} from "react-router-dom";
import UppercaseButton from "../elements/UppercaseButton";

const HomeStart = () => {
    return(
        <>
            <div className="is-flex is-flex-direction-column home-header-text-buttons">
                <StyledHeader
                    nameFirstHalf="Zacznij pomagać"
                    nameSecondHalf="Oddaj niechciane rzeczy w zaufane miejsce"
                />
                <div className="is-flex columns has-text-centered home-header-buttons-box">
                    <Link to="/logowanie">
                        <UppercaseButton
                            class="column"
                            nameFirstPart="Oddaj"
                            nameSecondPart="rzeczy"
                        />
                    </Link>
                    <Link to="/logowanie">
                        <UppercaseButton
                            class="column"
                            nameFirstPart="Zorganizuj"
                            nameSecondPart="zbiórkę"
                        />
                    </Link>
                </div>
            </div>
            <div className="column"></div>
        </>
    )
}
export default HomeStart;