import React, { useContext } from 'react';
import Navbar from './navbar';
import '../scss/main.scss';
import { ThemeContext } from '../theme-context';

const Main = () => {
    const [darkTheme] = useContext(ThemeContext);

    return (
        <div className={darkTheme ? "main dark-mode" : "main"}>

            <Navbar />
        </div>
    );
}


export default Main;