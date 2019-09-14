import React from 'react'
import './CountryBox.scss'

const CountryBox = props => {
    const {country} = props

    return(
        <div className="countryBox">
            <div className="imageContainer">
                <img src={country.flag} alt="" className="image"/>
            </div>
            <div className="title">
                {country.name}
            </div>
        </div>
    )
}

export default CountryBox