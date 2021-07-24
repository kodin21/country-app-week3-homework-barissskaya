import {useEffect, useState} from 'react'; 
import MostLanguageCard from './MostLanguageCard';

 function MostLanguage(props) {
    const {countries} = props; 
    const [languages, setLanguages] = useState([]); 

    useEffect(() => {    
        let langs = []; 
        countries.map((country, index) => {  
            return country.languages;
        }).forEach((_langs, i) => { 

            _langs.forEach(_lang => { 
                let findIndex = langs.findIndex(lng => lng.iso639_1 === _lang.iso639_1);
                if(findIndex === -1){ 
                    langs.push({..._lang, count:1});
                }else{
                    langs[findIndex].count += 1;
                }
            }); 
        });   
        langs.sort((a, b) => (a.count < b.count) ? 1 : -1);
        setLanguages(langs);   
    }, [countries]);

    return (
        <div className="row mt-5 mb-5">  
        <div className="col-12"><h3>En çok konuşulan diller</h3></div> 
        
        {languages.map((lang, index) => ( 
            (index < 10 && <MostLanguageCard 
                key={index}
                name={lang.name}
                count={lang.count} 
            />)
            ))}
        </div> 
    )
}
export default MostLanguage
