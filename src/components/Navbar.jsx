import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_600x476.png';

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/">
                        <img className="logo" src={logo} alt="Al Rafay Associates" />
                    </Link>
                    <nav className="nav-menu">
                        <Link to="/listings">Property</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact" className="nav-btn">CONTACT US</Link>
                    </nav>
                </div>
            </div>
        </header>
    );

};

export default Navbar;
