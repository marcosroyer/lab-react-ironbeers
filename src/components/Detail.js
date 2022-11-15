import {useParams} from 'react-router-dom'
import Navbar from './Navbar'


function Detail({allBeers}){

    console.log(allBeers)

    const { beerID } = useParams()
    
    function getBeer(cervejaID){

        return allBeers.find( (beer) =>{
            return beer._id === cervejaID
        })
    }

    const selectedBeer = getBeer(beerID)

    const style = {width: "18rem"}
    return (
        <div>
        <Navbar />
        <div class="card" style={style}>
            <img src={selectedBeer.image} class="card-img-top" alt={selectedBeer.name} />
            <div class="card-body">
                <h4 class="card-title">{selectedBeer.name}   {selectedBeer.atenuation_level}</h4>
                <h5>{selectedBeer.tagline}   {selectedBeer.first_brewed}</h5>
                <p class="card-text">{selectedBeer.description}</p>
            </div>
            <ul class="list-group list-group-flush">

                <li class="list-group-item">{selectedBeer.contributed_by}</li>
            </ul>
            <div class="card-body">

            </div>
        </div>
        </div>
    )
}

export default Detail