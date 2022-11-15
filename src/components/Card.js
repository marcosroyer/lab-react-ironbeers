


function Card({image, name, tagline, contributed}){

    const style = {maxWidth: "540px"}

    return (
        <div className="card mb-3" style={style}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="beer" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{tagline}</p>
                        <p className="card-text"><small className="text-muted">{contributed}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card