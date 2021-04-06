import React from 'react';


const HomeColumn = (props)=>{
    return(

            <div className="three-columns-box column">
                <h2 className="three-columns-box-number">{props.number}</h2>
                <p className="three-columns-box-title">{props.title}</p>
                <p className="three-columns-box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos explicabo iure repellat tempore voluptates voluptatum.</p>
            </div>


    )
}
const HomeThreeColumns = () => {
    return (
        <div className="three-columns-background is-flex is-justify-content-center"
             id="homeThreeColumns">
        <div className="three-columns-container container is-flex is-justify-content-space-around has-text-centered columns">
            <HomeColumn number="10" title="Oddanych worków"/>
            <HomeColumn number="5" title="Wspartych organizacji"/>
            <HomeColumn number="7" title="Zorganizowanych zbiórek"/>
        </div>
        </div>
    );
};

export default HomeThreeColumns;