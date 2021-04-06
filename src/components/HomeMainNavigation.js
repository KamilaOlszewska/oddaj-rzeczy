import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const HomeMainNavigation = () => {
    return (
        <ul className="is-flex home-header-nav-menu">
            <Link
                activeClass="active"
                to="homeHeader"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
            >
            <li className="home-header-nav-menu-element">Start</li>
            </Link>
            <Link
                activeClass="active"
                to="homeThreeColumns"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
            >
            <li className="home-header-nav-menu-element">O co chodzi?</li>
            </Link>
            <Link
                activeClass="active"
                to="homeAboutUs"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
            >
            <li className="home-header-nav-menu-element">O nas</li>
            </Link>
            <Link
                activeClass="active"
                to="homeWhoWeHelp"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
            >
            <li className="home-header-nav-menu-element">Fundacja i organizacje</li>
            </Link>
            <Link
                activeClass="active"
                to="homeContact"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
            >
            <li className="home-header-nav-menu-element">Kontakt</li>
            </Link>
        </ul>
    );
};

export default HomeMainNavigation;