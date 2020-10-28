import React, { useContext, useState, useEffect } from 'react';
import '../scss/country.scss';
import { CountryContext } from '../contexts/country-context';
import { CountriesContext } from '../contexts/all-countries-context';
import { PopUpContext } from '../contexts/pop-up-context';
import ArrowIcon from '../utils/arrow-icon';
const Country = () => {
    const [country, setCountry] = useContext(CountryContext);
    const [countries] = useContext(CountriesContext);
    const [showPopUp, setShowPopUp] = useContext(PopUpContext);
    const [languages, setLanguages] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const [bordersCountries, setBordersCountries] = useState([]);
    const handleClose = () => {
        setShowPopUp(false);
    }
    const handleBorderClick = (border) => {
        setCountry(border)
    }

    useEffect(() => {

        setLanguages(country.languages)
        setCurrencies(country.currencies)
        getBorderCountries(country.borders);


    }, [country])

    const getBorderCountries = (borderCodes) => {
        let borderCountriesArr = [];
        for (let index = 0; index < borderCodes.length; index++) {
            const borderCode = borderCodes[index];
            for (let index = 0; index < countries.length; index++) {
                const item = countries[index];

                if (item.alpha3Code === borderCode) {
                    borderCountriesArr.push(item);
                }
            }
        }
        setBordersCountries(borderCountriesArr);

    }
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
                                            return <span className="currencies" key={currency.code}>{currency.name}, </span>
                                        else
                                            return <span className="currencies" key={currency.code}>{currency.name} </span>



                                    })}
                                </p>
                            </div>
                            <div>
                                <p>

                                    <span>Languages: </span>
                                    {languages.map((language, index) => {

                                        if (index !== languages.length - 1)
                                            return <span className="languages" key={language.iso639_1}>{language.name}, </span>
                                        else
                                            return <span className="languages" key={language.iso639_1}>{language.name}</span>

                                    })}
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="borders">

                        <span>Borders:</span>

                        {
                            bordersCountries.map((border) => {

                                return (
                                    <div className="country-border-wrap" key={border.alpha3Code}>

                                        <button className="border-button" onClick={() => handleBorderClick(border)}>{border.name}</button>
                                    </div>

                                )

                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )







}

export default Country;