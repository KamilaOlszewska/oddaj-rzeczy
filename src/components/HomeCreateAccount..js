import React from 'react';
import StyledHeader from "./elements/StyledHeader";
const HomeCreateAccount = ()=>{
    return(
        <div className="home-login-window">
            <StyledHeader nameFirstHalf="Załóż konto" nameSecondHalf=""/>
            <form className="home-login-form">
                <div className="is-flex is-flex-direction-column home-login-form-inputs">
                    <label className="home-login-form-label">E-mail</label>
                    <input className="home-login-form-input" type="email"/>
                    <label className="home-login-form-label">Hasło</label>
                    <input className="home-login-form-input" type="password"/>
                    <label className="home-login-form-label">Powtórz hasło</label>
                    <input className="home-login-form-input" type="password"/>
                </div>
                <div className="is-flex is-justify-content-space-between home-login-buttons">
                    <button className="home-login-form-button" >Zaloguj się</button>
                    <button className="home-login-form-button-bordered">Załóż konto</button>
                </div>
            </form>
        </div>

    )
}
export default HomeCreateAccount