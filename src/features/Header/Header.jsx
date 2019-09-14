import React from 'react'
import './Header.scss'

const Header = props => {

    const {handleSearch} = props

    return (
        <header className="header">
            <input type="search" className="inputSearch" placeholder="Buscar país" onChange={handleSearch}/>
        </header>
    )
}

export default Header