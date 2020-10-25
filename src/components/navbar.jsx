import React, { useContext } from 'react';
import '../scss/navbar.scss';
import { ThemeContext } from '../contexts/theme-context';
import MoonIcon from '../utils/moon-icon';
const Navbar = () => {
    const [darkTheme, SetDarkTheme] = useContext(ThemeContext);

    const handleToggle = () => {
        SetDarkTheme(!darkTheme);
    }
    return (
        <div className="navbar container-fluid ">

            <span className="navbar-title">Where in the world?</span>
            <div className="toggler" onClick={handleToggle}>
                <MoonIcon />
                {!darkTheme && <span>Dark mode</span>}
                {darkTheme && <span>Light mode</span>}



            </div>
        </div>
    );
}

export default Navbar;