import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../scss/countries.scss';
import SearchIcon from '../utils/search-icon';
import _ from 'lodash';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [countriesCopy, setCountriesCopy] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filterValue, setFilterValue] = useState("");

    const url = 'https://restcountries.eu/rest/v2/all';
    useEffect(() => {
        axios.get(url).then((data) => {
            let countriesTemp = data.data;
            console.log(countriesTemp);

            for (let index = 0; index < countriesTemp.length; index++) {
                const country = countriesTemp[index];
                let countryPopulation = country.population;
                let value = countryPopulation.toLocaleString('en-US', { minimumFractionDigits: 0 });
                country.population = value;
            }
            setCountries(countriesTemp);
            setCountriesCopy(countriesTemp);
        })

    }, [])
    const handleInputChange = (e) => {
        let inputValue = e.target.value;
        let tempArr = [];
        setInputValue(inputValue)
        if (filterValue === '') {
            tempArr = _.filter(countries, function (country) { return country.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 });
        }
        else {
            tempArr = _.filter(countries, function (country) {
                return country.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 &&
                    country.region.toLowerCase() === filterValue.toLowerCase()
            });
        }
        setCountriesCopy(tempArr)

    }

    const handleFilterChange = (e) => {
        let tempArr = [];
        let filterValue = e.target.value;
        setFilterValue(filterValue);
        if (filterValue !== 'all')
            tempArr = _.filter(countries, function (country) { return country.region.toLowerCase() === filterValue.toLowerCase() });
        else
            tempArr = countries;

        setCountriesCopy(tempArr)


    }
    return (
        <div className="countries ">
            <div className="countries-search ">
                <div className="countries-input">
                    <SearchIcon />
                    <input type="text" placeholder="Search for a country" onChange={(e) => handleInputChange(e)} value={inputValue} />
                </div>
                <div className="countries-filter">
                    <select name="region-select" id="region-select" defaultValue={'DEFAULT'} onChange={(e) => handleFilterChange(e)}>
                        <option value="DEFAULT" disabled>Filter By Region</option>
                        <option value="all">All</option>
                        <option value="africa">Africa</option>
                        <option value="americas">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
            </div>
            <div className="row ">


                {countriesCopy.length > 0 && countriesCopy.map((country) => {
                    return (
                        <div className="col-lg-5 col-md-6 col-sm-12 mx-1 card-wrap" key={country.numericCode}>
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
                {countriesCopy.length === 0 && <h1>Oops didn't find anything</h1>}
            </div>
        </div>
    );
}

export default Countries;