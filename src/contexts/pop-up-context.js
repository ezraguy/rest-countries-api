import React, { useState, createContext } from 'react';

export const PopUpContext = createContext();

export const PopUpProvider = (props) => {
    const [showPopUp, SetShowPopUp] = useState(false);

    return (
        <PopUpContext.Provider value={[showPopUp, SetShowPopUp]}>
            {props.children}
        </PopUpContext.Provider>
    );
}