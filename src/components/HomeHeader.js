import React from 'react';
import HeaderBackground from "../assets/HeroImage.png"
import UppercaseButton from "./elements/UppercaseButton";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import StyledHeader from "./elements/StyledHeader";
const HomeLogin = ()=>{
    return(
        <div>
            <h3>bla</h3>
            <form>
                <label>E-mail</label>
                <input type="email"/>
                <label>Hasło</label>
                <input type="password"/>
                <label>Powtórz hasło</label>
                <input type="password"/>
            </form>
        </div>

    )
}
const HomeCreateAccount = ()=>{
    return(
        <div>
            <h3>debilu</h3>
            <form>
                <label>E-mail</label>
                <input type="email"/>
                <label>Hasło</label>
                <input type="password"/>
                <label>Powtórz hasło</label>
                <input type="password"/>
            </form>
        </div>

    )
}
const HomeStart =()=>{
    return(<>
        <div className="is-flex is-flex-direction-column home-header-text-buttons">
            <StyledHeader
                nameFirstHalf="Zacznij pomagać"
                nameSecondHalf="Oddaj niechciane rzeczy w zaufane miejsce"
            />
            <div className="is-flex columns has-text-centered home-header-buttons-box">
                <UppercaseButton class="column is-half" nameFirstPart="Oddaj" nameSecondPart="rzeczy"/>
                <UppercaseButton class="column is-half" nameFirstPart="Zorganizuj" nameSecondPart="zbiórkę"/>
            </div>
        </div>
        <div className="column"></div>
        </>
    )
}
// const HomeHeader = () => {
// //     const homeBanner = document.getElementById("home-banner");
// //     const homeBannerColumn = document.getElementById("home-banner-column");
// //     const myColumns = document.getElementById("columns");
// //     const bannerIsHidden = () =>{
// //         return(
// //         homeBanner.classList.add("hidden"),
// //         homeBanner.classList.remove("column"),
// //         homeBannerColumn.classList.remove("column"),
// //             myColumns.classList.remove("columns")
// //     )
// //     }
//     return (
//         <div className="columns no-margin mb-0 mt-0"
//              id="columns"
//         >
//             <div
//                 className="home-header-banner column is-half"
//                 id="home-banner"
//                 style={{backgroundImage:`url(${HeaderBackground})`}}
//             />
//                 <Router history = "/">
//                     <div className="column is-half is-flex is-flex-direction-column home-header-content"
//                          id="home-banner-column"
//                     >
//                 <div className="is-flex is-flex-direction-column home-header-nav-bar">
//                 <div className="is-flex is-align-self-flex-end home-header-nav-login">
//                     <Link  to="/logowanie"><p className="home-header-nav-bar-element">Zaloguj</p></Link>
//                     <Link  to="/rejestracja"><p className="home-header-nav-bar-element">Załóż konto</p></Link>
//                 </div>
//                 <ul className="is-flex home-header-nav-menu">
//                     <li className="home-header-nav-menu-element">Start</li>
//                     <li className="home-header-nav-menu-element">O co chodzi?</li>
//                     <li className="home-header-nav-menu-element">O nas</li>
//                     <li className="home-header-nav-menu-element">Fundacja i organizacje</li>
//                     <li className="home-header-nav-menu-element">Kontakt</li>
//                 </ul>
//                 </div>
//             </div>
//                     <Switch>
//                         <Route exact path="/logowanie">
//                             <HomeLogin/>
//                         </Route>
//                         <Route exact path="/rejestracja">
//                             <HomeCreateAccount/>
//                         </Route>
//                         <Route exact path="/">
//                             <HomeStart/>
//                         </Route>
//                     </Switch>
//                 </Router>
//         </div>
//     );
// };
const HomeHeader=()=>{
    return(
        <div className="columns no-margin mb-0 mt-0"
             id="columns"
        >

            <div
                className="home-header-banner column is-half"
                id="home-banner"
                style={{backgroundImage:`url(${HeaderBackground})`}}
            />

            <div className="column is-half is-flex is-flex-direction-column home-header-content"
                 id="home-banner-column"
            >
                <Router history = "/">
                    <div className="is-flex is-flex-direction-column home-header-nav-bar">
                        <div className="is-flex is-align-self-flex-end home-header-nav-login">
                            <Link  to="/logowanie"><p className="home-header-nav-bar-element">Zaloguj</p></Link>
                            <Link  to="/rejestracja"><p className="home-header-nav-bar-element">Załóż konto</p></Link>
                        </div>
                        <ul className="is-flex home-header-nav-menu">
                            <li className="home-header-nav-menu-element">Start</li>
                            <li className="home-header-nav-menu-element">O co chodzi?</li>
                            <li className="home-header-nav-menu-element">O nas</li>
                            <li className="home-header-nav-menu-element">Fundacja i organizacje</li>
                            <li className="home-header-nav-menu-element">Kontakt</li>
                        </ul>
                    </div>
                    <Switch>
                        <Route exact path="/logowanie">
                            <HomeLogin/>
                        </Route>
                        <Route exact path="/rejestracja">
                            <HomeCreateAccount/>
                        </Route>
                        <Route exact path="/">
                            <HomeStart/>
                        </Route>
                    </Switch>
                </Router>




            </div>
        </div>

    )
}
export default HomeHeader;