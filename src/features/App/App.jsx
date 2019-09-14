import React from 'react';
import Header from '../Header/Header.jsx'
import CountryService from '../../services/CountryService/CountryService.jsx'
import CountryList from '../CountryList/CountryList.jsx'

class App extends React.Component {
    constructor(){
        super()

        this.state ={
            countries: [],
            filter: ""
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.CountryService = new CountryService()
        
    }
    componentDidMount(){
        this.CountryService.getAllCountriesFromApi().then(countries => this.setState({countries}))
    }
    handleSearch(e){
        console.log(e.target.value)
        this.setState({
            filter: e.target.value
        })
    }
    render(){
        return  <React.Fragment>
                <Header handleSearch={this.handleSearch}/>
                <CountryList countries={this.state.countries.filter(country => country.name.toUpperCase().includes(this.state.filter.toUpperCase()))}/>
        </React.Fragment>
       
    }
}

export default App