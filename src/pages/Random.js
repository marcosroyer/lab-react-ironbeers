

function Random({beer}){
    const style = {width: "18rem"}
    console.log(beer)
    return (
    
        <div class="card" style={style}>
            <img src={beer.image} class="card-img-top" alt={beer.name} />
            <div class="card-body">
                <h4 class="card-title">{beer.name}   {beer.atenuation_level}</h4>
                <h5>{beer.tagline}   {beer.first_brewed}</h5>
                <p class="card-text">{beer.description}</p>
            </div>
            <ul class="list-group list-group-flush">

                <li class="list-group-item">{beer.contributed_by}</li>
            </ul>
            <div class="card-body">

            </div>
        </div>

    )
}

export default Random