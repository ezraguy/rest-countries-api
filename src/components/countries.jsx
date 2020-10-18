import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../scss/countries.scss';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const url = 'https://restcountries.eu/rest/v2/all';
    useEffect(() => {
        axios.get(url).then((data) => {
            let countriesTemp = data.data;
            setCountries(countriesTemp);
        })

    }, [])
    return (
        <div className="countries ">
            <div className="row ">


                {countries.map((country) => {
                    return (
                        <div className="col-3  card-wrap" key={country.numericCode}>
                            <div className="card ">
                                <img src={country.flag} className="card-img-top" alt="flag" />
                                <div className="card-body">
                                    <h5 className="card-title country-name ">{country.name}</h5>
                                    <p className="card-text country-population"><span >Population:</span>  {country.population} </p>
                                    <p className="card-text">
                                        <span>
                                            Region:</span> {country.region} </p>
                                    <p className="card-text "><span >
                                        Capital:</span> {country.capital} </p>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Countries;