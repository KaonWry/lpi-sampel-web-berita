import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="logo">NewsPortal</a>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Politics</a></li>
                    <li><a href="#">Tech</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Lifestyle</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
