import "./ExploreBeers.scss";
import SideNav from "../../components/SideNav/SideNav";
import BeerCards from "../../components/BeerCards/BeerCards";
import { useState } from "react";

const ExploreBeers = (props) => {

    const { beerData } = props;
    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (event) => {
        const cleanInput = event.target.value;
        setSearchTerm(cleanInput);
    }

    const filteredBeers = beerData.filter((beer) => {
        const beerNameLower = beer.name.toLowerCase();
        const search = searchTerm.toLowerCase();
        return beerNameLower.includes(search) && beer.image_url;
    })

    const [isChecked, setIsChecked] = useState(true);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
       };  
       
    // const filteredABV = beerData.filter((abv) => {
    //     const highABV = abv.abv > 6;
    //     return highABV && abv.image_url;
    // })
    
    return (
        <section className="main">
            <div className="side-nav">
                <SideNav searchTerm={searchTerm} handleInput={handleInput} handleOnChange={handleOnChange} />
                <div>
                High Alcohol (ABV value greater than 6%) <input type="checkbox" onChange={handleOnChange}></input>
                </div>
            </div>
            <div className="cards">
                <BeerCards beerData={filteredBeers}/>
            </div>
        </section>


    )

}

export default ExploreBeers;