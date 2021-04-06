import React from 'react';
import BackgroundImage from "../assets/BackgroundImage@2x.png";
import StyledHeader from "./elements/StyledHeader";
import DemoForm from "./elements/ValidateEmail";

class HomeContact extends React.Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            console.log(this.state);

            let input = {};
            input["name"] = "";
            input["email"] = "";
            input["comment"] = "";
            this.setState({input: input});

            alert('Demo Form is submited');
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["name"]) {
            isValid = false;
            errors["name"] = "Podaj swoje imię.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Podaj swój email";
        }

        if (typeof input["email"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Podaj poprawny email";
            }
        }

        if (!input["comment"]) {
            isValid = false;
            errors["comment"] = "Wpisz swoją wiadomość";
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        return (
            <div id="homeContact"
                className="home-contact-section is-flex is-flex-direction-column is-marginless is-paddingless"
                style={{backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover"}}
            >
                <div className="white-box is-marginless">
                <div
                    className="columns home-contact-form-section is-marginless"
                >
                    <div className="column is-half empty-column mb-0 is-marginless is-paddingless"></div>
                    <div className="column is-half home-contact-form-box mb-0">
                        <StyledHeader nameFirstHalf="Skontaktuj się z nami" nameSecondHalf=""/>
                        <form onSubmit={this.handleSubmit}>
                            <div className="is-flex is-justify-content-space-between">
                                <div className="is-flex is-flex-direction-column form-group">
                                    <label for="name" className="home-login-form-label">Wpisz swoje imię</label>
                                    <input
                                        placeholder="Krzysztof"
                                        className="home-login-form-input form-control"
                                        type="text"
                                        name="name"
                                        value={this.state.input.name}
                                        onChange={this.handleChange}
                                        id="name"
                                    />
                                    <div className="text-danger">{this.state.errors.name}</div>
                                </div>
                                <div className="is-flex is-flex-direction-column form-group">
                                    <label for="email" className="home-login-form-label">Wpisz swój email</label>
                                    <input
                                        placeholder="abc@xyz.pl"
                                        className="home-login-form-input"
                                        type="text"
                                        name="email"
                                        value={this.state.input.email}
                                        onChange={this.handleChange}
                                        id="email"
                                    />
                                    <div className="text-danger">{this.state.errors.email}</div>
                                </div>
                            </div>
                            <div className="is-flex is-flex-direction-column form-group">
                                <label for="comment" className="home-login-form-label">Wpisz swoją wiadomość</label>
                                <textarea className="home-login-form-input home-contact-message"
                                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                          name="comment"
                                          value={this.state.input.comment}
                                          onChange={this.handleChange}
                                          type="text"/>
                                <div className="text-danger">{this.state.errors.comment}</div>
                            </div>
                            <div className="is-flex is-justify-content-flex-end">
                                <button className="home-login-form-button-bordered mt-5"
                                        type="submit"
                                        value="Submit"
                                >Wyślij</button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className=" columns home-footer is-marginless is-paddingless">
                    <div
                        className="level is-paddingless column is-flex is-justify-content-space-between home-footer-box is-align-content-flex-end is-marginless">
                        <h1 className="is-paddingless is-marginless">.</h1>
                        <p className="is-paddingless is-marginless">Copyright by CodersLab</p>
                        <h1 className="is-paddingless is-marginless">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-instagram-square"></i>
                        </h1>
                    </div>
                </div>
                </div>
            </div>
        );
    };
}

export default HomeContact;