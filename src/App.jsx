import './App.scss';
import ExploreBeers from "./containers/ExploreBeers/ExploreBeers";
// import BeerCards from './components/BeerCards/BeerCards';
import { useState, useEffect } from "react";


const App = () => {

  const [ beers, setBeers ] = useState("");

  const getBeers = () => {

    fetch("https://api.punkapi.com/v2/beers")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setBeers(data);
    })
  }

  useEffect(getBeers, []);

 
  // const [ newBeers, setNewBeers ] = useState("");

  // const getNewBeers = () => {

  // fetch("http://localhost:3010/api/beers")
  //     .then((res) => {
  //     return res.json()
  //     })
  //     .then((data) => {
  //     setNewBeers(data);
  //     console.log(newBeers);
  //     })
  //   }

  // useEffect(getNewBeers, [])


// This was below the header tag within 'return'
/* <div onClick={getNewBeers}>
<button>Josh's Picks</button>
{newBeers.beers && <BeerCards beerData={newBeers.beers}/>}
</div> */

 
  return (
    <div>
      <header>
        <h1>BREWDOG</h1>
      </header>
      <div>
        {beers && <ExploreBeers beerData={beers}/>}
      </div>
    </div>
  )
}

export default App;
