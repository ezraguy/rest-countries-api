import React, { useState } from 'react';
import '../scss/navbar.scss';
import MoonIcon from '../utils/moon-icon';
const Navbar = () => {
    const [darkMode, SetDarkMode] = useState(false);
    const handleToggle = () => {
        SetDarkMode(!darkMode);
    }
    return (
        <div className="navbar container-fluid ">
            <div className="container">
                <span className="navbar-title">Where in the world?</span>
                <div className="toggler" onClick={handleToggle}>
                    <MoonIcon />
                    <span>Dark mode</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;