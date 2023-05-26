const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios');
const { response } = require('express');


const getCharById = async (req, res) => {
    const {id} = req.params;
     
    try {
        const response = await axios.get(`${URL}${id}`)
        const personaje = response.data
                  
          personaje.name?
          res.status(200).json(personaje):
          res.status(404).send("Not found")
        }
        catch (error) {
        return res.status(500).send(error.message)
        
    }  
    
};


module.exports = {getCharById}







/* server.get('/users/:id', (req, res)=>{
    const {id} = req.params

    const alumnos = [ */




/* const getCharById = (req, res)=>{
    let {id}= req.params
    axios.get(`${URL}/${id}`)
    .then(char => (char.data))
    .then(({id, name, gender, species, origin, image, status})=>{
        let personajes = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        }        
    }
    )
    res.status(200).json(personaje)

} */



















/* const axios = require ("axios");

const getCharById = (res, id) =>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(char => (char.data))
    .then(({id, name, gender, species, origin, image, status})=>{
        let personajes = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        }
        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(personajes))
    })

    .catch((err)=>{
        return res.writeHead(500, {"content-type": "text/plain"}).end(err.message)
    }) 
}

module.exports = getCharById
 */
/* 1: {id:1
    name:"Rick"
    gender:"Male"
    species:"Human"
    origin: "Earth"
    image: {url no se que}
status: "Alive"} */