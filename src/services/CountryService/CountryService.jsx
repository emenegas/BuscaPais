import Axios from "axios"; //pluguin requisições ajax

class CountryService {
  async getAllCountriesFromApi() {
    return Axios.get(`${process.env.REACT_APP_API_URL}/all/`).then(response => response.data);
  }
}

export default CountryService;