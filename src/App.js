import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Beers from './pages/Beers';
import Detail from './components/Detail';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Random from './pages/Random';

function App() {

  const [allBeers, setBeers] = useState([])


  useEffect(() => {
      async function fetchBeers() {
        const response = await axios.get(
          "https://ironbeer-api.fly.dev/"
        );
        setBeers(response.data);
      }
  
      fetchBeers();
    }, []);
   
  function random(){
    return allBeers[Math.floor(Math.random() * allBeers.length)]
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home />} /> 
        <Route path="/beers" element={ <Beers allBeers={allBeers}/>} /> 
        <Route path="/beers/:beerID" element={ <Detail allBeers={allBeers}/>} />
        <Route path="/beers/random" element={ <Random beer={random()}/>} />
      </Routes>

    </div>
  );
}

export default App;
