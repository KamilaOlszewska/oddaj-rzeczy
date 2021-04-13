import {Link} from "react-router-dom";

const HomeAltNavigation = () => {
    return (
        <ul className="is-flex home-header-nav-menu">
            <Link
                to="/"
            >
                <li className="home-header-nav-menu-element">Start</li>
            </Link>
            <Link
                to="/"
            >
                <li className="home-header-nav-menu-element">O co chodzi?</li>
            </Link>
            <Link
                to="/"
            >
                <li className="home-header-nav-menu-element">O nas</li>
            </Link>
            <Link
                to="/"
            >
                <li className="home-header-nav-menu-element">Fundacja i organizacje</li>
            </Link>
            <Link
                to="/"
            >
                <li className="home-header-nav-menu-element">Kontakt</li>
            </Link>
        </ul>
    );
};

export default HomeAltNavigation;