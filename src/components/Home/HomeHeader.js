import HeaderBackground from "../../assets/HeroImage.png"
import {Link} from "react-router-dom";
import HomeMainNavigation from "./HomeMainNavigation";
import HomeStart from "./HomeStart";


const HomeHeader = () => {
    return(
        <div
            className="columns no-margin mb-0 mt-0"
            id="homeHeader"
        >
            <div
                className="home-header-banner column is-half"
                id="home-banner"
                style={{backgroundImage:`url(${HeaderBackground})`}}
            />
            <div
                className="column is-half is-flex is-flex-direction-column home-header-content"
                id="home-banner-column"
            >
                <div className="is-flex is-flex-direction-column home-header-nav-bar">
                    <div className="is-flex is-align-self-flex-end home-header-nav-login">
                        <Link to="/logowanie">
                            <p className="home-header-nav-bar-element">Zaloguj</p>
                        </Link>
                        <Link to="/rejestracja">
                            <p className="home-header-nav-bar-element">Załóż konto</p>
                        </Link>
                    </div>
                    <HomeMainNavigation/>
                    <HomeStart/>
                </div>
            </div>
        </div>
    )
}
export default HomeHeader;