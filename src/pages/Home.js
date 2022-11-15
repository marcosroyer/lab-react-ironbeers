import Choice from "../components/Choice"
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import {Link} from 'react-router-dom'

function Home(){

    const texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum nisi id mi porttitor, 
    vel laoreet nisl sollicitudin. In dictum posuere leo, ac ornare urna facilisis non. Nullam 
    ut enim eget massa viverra convallis.`

    return (
        <div>
            <Link to="/beers">
            <Choice image={beers} title={'All Beers'} texto={texto}/>
            </Link>
            <Link to="/beers/random-beer">
                <Choice image={randomBeer} title={'Random Beer'}  texto={texto}/>
            </Link>
            <Link to="/new-beer">
                <Choice image={newBeer} title={'New Beer'}  texto={texto}/>
            </Link>
            
            
        </div>
    )
}

export default Home