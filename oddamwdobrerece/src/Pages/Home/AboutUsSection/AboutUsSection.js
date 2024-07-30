import React from 'react';
import './AboutUsSection.scss';
import Title from "../../../Common/Title/Title";
import Signature from "../../../assets/Signature.svg";

const AboutUsSection = () => {
    return (
        <div className="about-us-section" id="about">
            <div className="left-section">
                <div className="left-section-container">
                    <Title>O nas</Title>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={Signature} className="signature"/>
                </div>
            </div>
            <div className="right-section"></div>
        </div>
    );
};

export default AboutUsSection;
