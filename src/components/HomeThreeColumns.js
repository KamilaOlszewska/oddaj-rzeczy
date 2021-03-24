import React from 'react';

const HomeThreeColumns = () => {
    return (
        <div className="three-columns-background is-flex is-justify-content-center">
        <div className="three-columns-container container is-flex is-justify-content-space-around has-text-centered columns">
            <div className="three-columns-box ">
                <h2 className="three-columns-box-number column">10</h2>
                <p className="three-columns-box-title">Oddanych worków</p>
                <p className="three-columns-box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos explicabo iure repellat tempore voluptates voluptatum.</p>
            </div>
            <div className="three-columns-box">
                <h2 className="three-columns-box-number column">5</h2>
                <p className="three-columns-box-title">Wspartych organizacji</p>
                <p className="three-columns-box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos explicabo iure repellat tempore voluptates voluptatum.</p>
            </div>
            <div className="three-columns-box">
                <h2 className="three-columns-box-number column">7</h2>
                <p className="three-columns-box-title">Zorganizowanych zbiórek</p>
                <p className="three-columns-box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos explicabo iure repellat tempore voluptates voluptatum.</p>
            </div>
        </div>
        </div>
    );
};

export default HomeThreeColumns;