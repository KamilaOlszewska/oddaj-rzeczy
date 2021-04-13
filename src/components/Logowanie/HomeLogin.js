import StyledHeader from "../elements/StyledHeader";
import {Link} from "react-router-dom";
import HomeAltNavigation from "./HomeAltNavigation";
const HomeLogin = ()=>{
    return(

        <div className="columns no-margin mb-0 mt-0"
             id="homeHeader"
        >
            <div className="column  is-flex is-flex-direction-column home-header-content"
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
                    <HomeAltNavigation/>
                    <div className="home-login-window">
                        <StyledHeader
                            nameFirstHalf="Zaloguj się"
                            nameSecondHalf=""/>
                        <form className="home-login-form">
                            <div className="is-flex is-flex-direction-column home-login-form-inputs">
                                <label className="home-login-form-label">E-mail</label>
                                <input className="home-login-form-input" type="email"/>
                                <label className="home-login-form-label">Hasło</label>
                                <input className="home-login-form-input" type="password"/>
                            </div>
                            <div className="is-flex is-justify-content-space-between home-login-buttons">
                                <Link to="/rejestracja">
                                    <button
                                        className="home-login-form-button" >
                                        Załóż konto
                                    </button>
                                </Link>
                                <Link to="/oddaj-rzeczy">
                                    <button
                                        className="home-login-form-button-bordered nav-button-active">
                                        Zaloguj się
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>






















    )
}
export default HomeLogin