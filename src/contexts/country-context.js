import React, { useState, createContext } from 'react';

export const CountryContext = createContext();

export const CountryProvider = (props) => {
    const [country, SetCountry] = useState({});

    return (
        <CountryContext.Provider value={[country, SetCountry]}>
            {props.children}
        </CountryContext.Provider>
    );
}