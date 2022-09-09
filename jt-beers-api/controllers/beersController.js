const images = "http://localhost:3010/images/"


const beers = [
    {
        "id": 27,
        "name": "Blue Jager",
        "first_brewed": "08/2011",
        "description": "Description goes here",
        "image_url": images + "blue-image.png",
        "abv": 15,
        "ph": 4.5
    },
    {
        "id": 28,
        "name": "Dog B",
        "first_brewed": "03/1986",
        "description": "Description goes here",
        "image_url": images + "dog-b.png",
        "abv": 15.0,
        "ph": 5.5

    },
    {
        "id": 29,
        "name": "HBC",
        "first_brewed": "02/2009",
        "description": "Description goes here",
        "image_url": images + "hbc.png",
        "abv": 15.0,
        "ph": 3.8

    },
    {
        "id": 30,
        "name": "Dana",
        "first_brewed": "04/1996",
        "description": "Description goes here",
        "image_url": images + "dana.png",
        "abv": 15.0,
        "ph": 2.5

    },
    {
        "id": 31,
        "name": "Ten Head High",
        "first_brewed": "07/1993",
        "description": "Description goes here",
        "image_url": images + "ten-head-high.png",
        "abv": 15.0,
        "ph": 4.8

    }
];

export const getBeers = (req, res) => {
    res.status(200).send({
        beers: beers
    })
}

