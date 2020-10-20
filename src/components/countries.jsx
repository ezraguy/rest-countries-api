import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../scss/countries.scss';
import SearchIcon from '../utils/search-icon';
import _ from 'lodash';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [countriesCopy, setCountriesCopy] = useState([]);
    const url = 'https://restcountries.eu/rest/v2/all';
    useEffect(() => {
        axios.get(url).then((data) => {
            let countriesTemp = data.data;
            setCountries(countriesTemp);
            setCountriesCopy(countriesTemp);

        })

    }, [])
    const handleInputChange = (e) => {
        let inputValue = e.target.value;
        let tempArr = _.filter(countries, function (country) { return country.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 });
        setCountriesCopy(tempArr)

    }
    return (
        <div className="countries ">

            <div className="countries-search ">
                <div className="countries-input">

                    <SearchIcon />
                    <input type="text" placeholder="Search for a country" onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="countries-filter">
                    <select name="region-select" id="region-select" defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Filter By Region</option>
                        <option value="africa">Africa</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
            </div>
            <div className="row ">


                {countriesCopy.map((country) => {
                    return (
                        <div className="col-lg-3 col-md-6 col-sm-12 mx-1 card-wrap" key={country.numericCode}>
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