import React, { useContext } from 'react';
import Navbar from './navbar';
import '../scss/main.scss';
import { ThemeContext } from '../contexts/theme-context';
import Countries from './countries';

const Main = () => {
    const [darkTheme] = useContext(ThemeContext);

    return (
        <div className={darkTheme ? "main dark-mode" : "main"}>

            <Navbar />
            <Countries />

        </div>
    );
}


export default Main;