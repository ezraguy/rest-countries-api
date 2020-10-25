import React, { useState, createContext } from 'react';

export const CountryContext = createContext();

export const CountryProvider = (props) => {
    const [country, Setcountry] = useState({});
    return (
        <CountryContext.Provider value={[country, Setcountry]}>
            {props.children}
        </CountryContext.Provider>
    );
}