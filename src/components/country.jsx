import React, { useContext, useState, useEffect } from 'react';
import '../scss/country.scss';
import { CountryContext } from '../contexts/country-context';
import { PopUpContext } from '../contexts/pop-up-context';
import ArrowIcon from '../utils/arrow-icon';
const Country = () => {
    const [country, setCountry] = useContext(CountryContext);
    const [showPopUp, setShowPopUp] = useContext(PopUpContext);
    const [languages, setLanguages] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const handleClose = () => {
        setShowPopUp(false);
    }
    useEffect(() => {

        setLanguages(country.languages)
        setCurrencies(country.currencies)
        window.focus();
    }, [country])
    return (


        <div className="country-wrap">

            <div className="country">


                <button onClick={handleClose} className="back-btn">
                    <ArrowIcon /><span>back</span></button>

                <div className="flag">
                    <img src={country.flag} alt="flag" />

                </div>



                <div className="country-info">
                    <div className="country-name">
                        {country.name}
                    </div>
                    <div className="info">
                        <div className="info-left">
                            <p><span>Native Name: </span>{country.nativeName}</p>
                            <p><span>Population: </span>{country.population}</p>
                            <p><span>Region: </span>{country.region}</p>
                            <p><span>Sub Region: </span>{country.subregion}</p>
                            <p><span>Capital: </span>{country.capital}</p>
                        </div>
                        <div className="info-right">
                            <p><span>Top Level Domain: </span>{country.topLevelDomain}</p>
                            <div>
                                <p>

                                    <span>Currencies: </span>

                                    {currencies.map((currency, index) => {

                                        if (index !== currencies.length - 1)
                                            return <span className="currencies">{currency.name}, </span>
                                        else
                                            return <span className="currencies">{currency.name} </span>



                                    })}
                                </p>
                            </div>
                            <div>
                                <p>

                                    <span>Languages: </span>
                                    {languages.map((language, index) => {
                                        if (index !== languages.length - 1)
                                            return <span className="languages">{language.name}, </span>
                                        else
                                            return <span className="languages">{language.name}</span>

                                    })}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )







}

export default Country;