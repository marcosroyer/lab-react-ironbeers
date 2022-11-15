import Navbar from "../components/Navbar";
import Card from "../components/Card";
import {Link} from 'react-router-dom'

function Beers({allBeers}){



    return (
        <div>
            <Navbar />
            {
                allBeers.map( (beer) =>{
                    return (
                        <div key={beer._id} class="list-group">
                            <Link to={`/beers/${beer._id}`}> 
                                <Card image={beer.image} name={beer.name} tagline={beer.tagline} contributed={beer.contributed_by} />
                            </Link>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Beers