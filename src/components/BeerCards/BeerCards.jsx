import "./BeerCards.scss";

const BeerCards = (props) => {

    const selections = props.beerData.map((beers) => {

        return (
            <div className="individualCard" key={beers.id}>
                <p className="headingText">{beers.name}</p>
                <img className="image" src={beers.image_url} alt="type of beer" />
            </div>
        )

    })


    return (
        <div>{selections}</div>
        
    )

}

export default BeerCards;