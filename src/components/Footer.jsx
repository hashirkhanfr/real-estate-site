import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <img className="footer-logo" src="https://placehold.co/150x150" alt="Logo" />
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
                    <img src="https://placehold.co/40x40" alt="Social 1" />
                    <img src="https://placehold.co/40x40" alt="Social 2" />
                    <img src="https://placehold.co/40x40" alt="Social 3" />
                    <img src="https://placehold.co/40x40" alt="Social 4" />
                </div>
            </div>
        </footer>
    );

};

export default Footer;
