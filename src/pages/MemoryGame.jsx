import Difficulties from "../difficulty";
import GameScreen from "../components/game_screen/gamescreen";
import { useParams } from "react-router-dom";
import { DiffTargets } from "../difficulty";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

async function getPokemon(id) {
    const pokeRaw = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeObj = await pokeRaw.json();
    const pokemon = {
        name: pokeObj.name,
        id: pokeObj.id,
        img: pokeObj.sprites.other['official-artwork'].front_default,
        types: pokeObj.types
    }

    return pokemon;
}

function getPokemonToChoose(difficulty) {
    let amount = 0;
    const MAX_POKEMON = 900;
    if (difficulty == Difficulties.EASY) {
        amount = DiffTargets.EASY;
    }
    else if (difficulty == Difficulties.MEDIUM) {
        amount = DiffTargets.MEDIUM;
    }
    else {
        amount = DiffTargets.HARD;
    }

    let pokemonToChoose = [];
    for (let i = 0; i < amount; i++) {
        let pokemonNum = 1 + Math.floor(Math.random() * MAX_POKEMON);
        while (pokemonToChoose.includes(pokemonNum)) {
            pokemonNum = 1 + Math.floor(Math.random() * MAX_POKEMON);
        }
        pokemonToChoose.push(pokemonNum);
    }

    return pokemonToChoose;

}




function MemoryGame() {
    const { difficulty } = useParams();
    const [isLoading, changeLoadStatus] = useState(true);
    const [pokeList, changePokeList] = useState([]);
    const [reload, reloadGame] = useState(false);

    function getPokemonList(difficulty) {

        const pokeIds = getPokemonToChoose(difficulty);
        const pokeList = [];
        pokeIds.map((id) => (pokeList.push(getPokemon(id))))
        Promise.all(pokeList).then((resp) => {
            changePokeList(resp);
            changeLoadStatus(false);
        })

    }

    
function customReload(){
    changeLoadStatus(true);
    reloadGame(!reload);
}



    useEffect(() => {
        getPokemonList(difficulty)
    }, [reload]);



    if (isLoading) {
        return (
            <LoadingScreen/>
        )
    }

    return (
        <>
            <GameScreen difficulty={difficulty} pokemonList={pokeList} reloadGame={customReload}/>
        </>
    )
}

export default MemoryGame;