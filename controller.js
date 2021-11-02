const houses = require('./db.json')

const globalId = 4


module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },

    deleteHouse: (req, res) => {
        let houseIndex = houses.findindex((houses) => houses.id === +req.params.id);
        houses.splice(houseIndex, 1);
        res.status(200).send('houses') 
    },

    createHouse: (req, res) => {
        let { title, rating, imageURL} = req.body;
        
        let newHouse = {
            id: globalId,
            title: title,
            rating: rating,
            imageURL: imageURL
        };

        houses.push(newHouse);
        res.status(200).send(movies)
        globalId++
    },

    updateHouse: (req, res) => {
        let requestId = req.params.id;
        let houseIndex = houses.findIndex((houses) => houses.id === parseInt(req.params.id))
        
        if (req.body.type === "plus") {
          houses[houseIndex].rating++
        } else if (req.body.type === "minus") {
          houses[houseIndex].rating--
        }
        res.status(200).send(houses);
    },

}