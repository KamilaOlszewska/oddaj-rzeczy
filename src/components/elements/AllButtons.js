import React from 'react';

const UppercaseButton = (props) => {
    let classArray="uppercase-button";
    return (
        <button className={classArray +" "+ props.class}>{props.nameFirstPart}<br/>{props.nameSecondPart}</button>

    );
};

export default UppercaseButton;