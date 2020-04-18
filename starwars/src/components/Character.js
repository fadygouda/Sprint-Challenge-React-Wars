// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./Card"

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
        .then(response => setCharacters(response.data.results))

        .catch(error => console.log("There is an Error!", error));

        
    }, []) 

    return <div>
        {characters.map(character => {
            return(<Card key={character.id} name ={character.name} image = {character.image} location = {character.location} species = {character.species}/>)
        })}
    </div>

}
export default Characters;