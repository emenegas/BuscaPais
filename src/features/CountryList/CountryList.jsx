import React from 'react'
import CountryBox from '../CountryBox/CountryBox.jsx'
import './CountryList.scss'

const CountryList = props => {
    return (
        <div className="countryList">
            {
                props.countries.map( (country, key) => <CountryBox country={country} key={key}/> )
            }
        </div>
    )
}

export default CountryList