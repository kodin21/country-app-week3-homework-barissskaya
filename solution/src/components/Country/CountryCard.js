function CountryCard({key, name, flag, languages, capital}) {
    return (
        <div className="col-12 col-sm-3 mt-3" key={key}>
            <div className="card">
                <div className="card-body">
                    <p><img alt={name} src={flag} style={{width:100}}/></p>
                    <p><b>{name}</b></p>  
                    {capital && (<p><strong>Başkent:</strong> {capital}</p>)}
                    <p><strong>Diller:</strong>  
                        {languages.map((lang, index) => (
                        <div>{lang.name}</div> 
                        ))} 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CountryCard
