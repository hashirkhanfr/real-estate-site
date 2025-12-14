import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_600x476.png';
import facebookIcon from '../assets/icons/facebook.svg';
import whatsappIcon from '../assets/icons/whatsapp.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <img className="footer-logo" src={logo} alt="Al Rafay Associates" />
                <h4>ADDRESS</h4>
                <p>Office#2, Zeb Arcade,<br />G-15 Markaz, Islamabad,<br />Pakistan</p>
            </div>
            <div className="footer-column">
                <h4>CONTACT INFORMATION</h4>
                <p>Phone: +92 333 9555482<br />Email: malikmustaqeemtamman@gmail.com</p>
                <div className="footer-nav">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/listings">PROJECTS</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
                <div className="social-icons">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    <img src={facebookIcon} alt="Facebook" />
                    <img src={instagramIcon} alt="Instagram" />
                    <img src={linkedinIcon} alt="LinkedIn" />
                </div>
            </div>
        </footer>
    );

};

export default Footer;
