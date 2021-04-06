import React from 'react';
import StyledHeader from "./elements/StyledHeader";
const HomeLogin = ()=>{
    return(
        <div className="home-login-window">
            <StyledHeader nameFirstHalf="Zaloguj się" nameSecondHalf=""/>
            <form className="home-login-form">
                <div className="is-flex is-flex-direction-column home-login-form-inputs">
                <label className="home-login-form-label">E-mail</label>
                <input className="home-login-form-input" type="email"/>
                <label className="home-login-form-label">Hasło</label>
                <input className="home-login-form-input" type="password"/>
                </div>
                <div className="is-flex is-justify-content-space-between home-login-buttons">
                <button className="home-login-form-button" >Załóż konto</button>
                <button className="home-login-form-button-bordered">Zaloguj się</button>
                </div>
            </form>
        </div>

    )
}
export default HomeLogin