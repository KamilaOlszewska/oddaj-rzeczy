import React from 'react';
import Decoration from "../../assets/Decoration.svg";

const StyledHeader = (props) => {
    return (
        <div className="is-flex is-flex-direction-column is-justify-content-center styled-header">
            <h3 className="home-header-text-buttons-text">
                {props.nameFirstHalf}<br/>
                {props.nameSecondHalf}
            </h3>
            <img  className="fancy-selector" src={Decoration}/>
        </div>

    );
};

export default StyledHeader;