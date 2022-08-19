import './App.scss';
import data from "./data/data"
import ExploreBeers from "./containers/ExploreBeers/ExploreBeers";


function App() {
  return (
    <div>
      <header>
        <h1>BREWDOG</h1>
      </header>
      <div>
        <ExploreBeers beerData={data} />
      </div>
    </div>
  );
}

export default App;
