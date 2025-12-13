import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet />
                <Footer />
            </div>
        </>
    );
};

export default Layout;
