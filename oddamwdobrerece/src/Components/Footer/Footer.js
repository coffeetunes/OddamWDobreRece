import React from 'react';
import FacebookIcon from '../../assets/Facebook.svg';
import InstagramIcon from '../../assets/Instagram.svg';
import './Footer.scss';
import Container from "../../Common/Container/Container";

const Footer = () => {
    return (
        <footer className="footer-container">
<Container className="footer-content">
                <p className="footer-text">Copyright by Coders Lab</p>
                <div className="footer-right">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookIcon} alt="Facebook" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramIcon} alt="Instagram" className="social-icon" />
                    </a>
                </div>
            </ Container>
        </footer>
    );
};

export default Footer;
