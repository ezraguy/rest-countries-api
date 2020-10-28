import React, { useState, createContext } from 'react';

export const CountriesContext = createContext();

export const CountriesProvider = (props) => {
    const [countries, SetCountries] = useState({});

    return (
        <CountriesContext.Provider value={[countries, SetCountries]}>
            {props.children}
        </CountriesContext.Provider>
    );
}