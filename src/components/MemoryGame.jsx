import GameStatus from "../gamestate";
import Difficulties from "../difficulty";
import { useEffect, useState } from "react";

async function getPokemon(id){
    const pokeRaw = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeObj = await pokeRaw.json();
    const pokemon = {
        name: pokeObj.name,
        id: pokeObj.id,
        img: pokeObj.sprites.front_default
    }
    //console.log(pokemon);
    return pokemon;
}

function getPokemonToChoose(difficulty){
    let amount = 0;
    const MAX_POKEMON = 900;
    if(difficulty == Difficulties.EASY){
        amount = 6;
    }
    else if(difficulty == Difficulties.MEDIUM){
        amount = 10;
    }
    else{
        amount = 14;
    }

    let pokemonToChoose = [];
    for(let i = 0; i< amount; i++){
        let pokemonNum = Math.floor(Math.random()*MAX_POKEMON);
        while(pokemonToChoose.includes(pokemonNum)){
            pokemonNum = Math.floor(Math.random()*MAX_POKEMON);
        }
        pokemonToChoose.push(pokemonNum);
    }
   // console.log(pokemonToChoose)
    return pokemonToChoose;

}








function MemoryGame(props){



    const {status, difficulty, changeStatus} = props;
    const [isLoading, changeLoadStatus] = useState(true);
    const [pokeList, changePokeList] = useState([]);    
    
    function getPokemonList(difficulty){
        if(status == GameStatus.RUNNING){
        const pokeIds = getPokemonToChoose(difficulty);
        const pokeList = [];
        pokeIds.map((id) => (pokeList.push(getPokemon(id))))
        Promise.all(pokeList).then((resp) => {
            changePokeList(resp);
            changeLoadStatus(false);
        })
        }
    }    

    useEffect(() => {
        getPokemonList(difficulty)
    }, [difficulty]);
    if(isLoading){
        return(
            <span>Loading!</span>
        )
    }

    if(status ==  GameStatus.RUNNING){
        console.log(pokeList);
        return (
            <>
            <div>
                {pokeList.map((pokemon) =>(
                    <>
                        <div>
                            <h1>{pokemon.name}</h1>
                            <img src={pokemon.img}/>

                        </div>
                    </>
                )
                )}
            </div>
            </>
        )
    }
    else{
        return (
            <></>
        )
    }

}

export default MemoryGame;