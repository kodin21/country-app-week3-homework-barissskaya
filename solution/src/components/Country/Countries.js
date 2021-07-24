import CountryCard from './CountryCard';
function Countries(props) {
  const {countries} = props;  
    return (
        <div className="row mt-5 mb-5">  
        <div className="col-12"><h3>Ülkeler</h3></div>
        {countries.map((country, index) => ( 
            <CountryCard 
                key={index}
                name={country.name}
                flag={country.flag}
                capital={country.capital} 
                languages={country.languages} 
            />
            ))}
        </div>
    )
} 
export default Countries
