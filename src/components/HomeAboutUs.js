import React from 'react';
import Decoration from "../assets/Decoration.svg"

const HomeAboutUs = () => {
    return (
        <div className="columns">
            <div className="column is-half home-about-us-section">
                <div className="home-about-us-section-box">
                    <h4 className="home-about-us-section-box-header">O nas</h4>
                    <img src={Decoration}/>
                    <p className="home-about-us-section-box-paragraph">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <span className="signature"></span>
                </div>

            </div>
            <div className="column is-half home-about-us-photo-container"></div>

        </div>
    );
};

export default HomeAboutUs;