import {useState, useEffect} from 'react'; 
import Countries from './components/Country/Countries';
import MostLanguage from './components/Country/MostLanguage'; 
import './App.css'; 
 
const getCountries = () => 
  fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json());
  
function App() {
  const [countrySelected, setCountrySelected] = useState(true);
  const [data, setData] = useState({ countries: [] }); 
 
  useEffect(() => {  
    getCountries()
      .then(data => {
        setData({
          countries: data 
        })
      }); 
  }, []);

  return (
    <div className="App"> 
      <div className="container mt-5">
        <button className={`btn btn-xl mx-2 ${countrySelected ? "btn-primary" : "btn-secondary"}`} onClick={() => setCountrySelected(true)}>Ülke Listesi</button>
        <button className={`btn btn-xl mx-2 ${!countrySelected ? "btn-primary" : "btn-secondary"}`} onClick={() => setCountrySelected(false)}>İstatistikler</button>  
        {countrySelected && (<Countries countries={data.countries}></Countries>)} 
        {!countrySelected && (<MostLanguage countries={data.countries}></MostLanguage>)} 
      </div>
    </div>
  );
}

export default App;
