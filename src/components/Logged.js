import React from 'react';
import LoggedHeader from "./LoggedHeader";
import HomeContact from "./Home/HomeContact";
import LoggedForm from "./LoggedForm";

const Logged = () => {
    return (
        <div>
            <LoggedHeader/>
            <LoggedForm/>
            <HomeContact/>
        </div>
    );
};

export default Logged;