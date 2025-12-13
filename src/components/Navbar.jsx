import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/">
                        <img className="logo" src="https://placehold.co/60x60" alt="Logo" />
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
