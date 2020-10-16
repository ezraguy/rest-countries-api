import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [darkTheme, SetDarkTheme] = useState(false);
    return (
        <ThemeContext.Provider value={[darkTheme, SetDarkTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}