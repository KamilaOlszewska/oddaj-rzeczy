import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";

const Home = () => {
    return (
        <div>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSimpleSteps/>
        </div>
    );
};

export default Home;