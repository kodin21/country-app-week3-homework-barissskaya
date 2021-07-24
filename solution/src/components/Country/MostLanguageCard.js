function MostLanguageCard({key, name, count}) {
    return (
        <div className="col-12 col-sm-3 mt-3" key={key}>
            <div className="card">
                <div className="card-body"> 
                    <b>{name} - {count}</b>  
                </div>
            </div>
        </div>
    )
} 
export default MostLanguageCard
