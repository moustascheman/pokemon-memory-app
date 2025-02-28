import { useState } from "react";
import GameHeader from "./GameHeader";
import Difficulties from "../../difficulty";
import { DisplayTargets } from "../../difficulty";
import Card from "./Card";
function pickIndexRandomly(max, exclude){

}



function GameScreen(props){
    const {changeStatus, difficulty, pokemonList} = props;
    const [targetValue, setTargetValue] = useState(pokemonList.length);
    const [currentScore, setCurrentScore] = useState(0);
    const [selectedPokemon, changeSelectedPokemon] = useState([]);
    
    function getPokemonToDisplay(sourceList, selectedList, difficulty){
        const notPicked = [];
        const toDisplay = [];
        const sourceListCopy = [...sourceList];

        let displayAmount = 0;
        switch(difficulty){
            case Difficulties.EASY:
                displayAmount = DisplayTargets.EASY;
                break;
            case Difficulties.MEDIUM:
                displayAmount = DisplayTargets.MEDIUM;
                break;
            case Difficulties.HARD:
                displayAmount = DisplayTargets.HARD;
                break;
        }

        sourceListCopy.map((pokemon) => {
            if(!selectedList.includes(pokemon)){
                notPicked.push(pokemon);
            }
        })
        const guaranteedNotPicked = notPicked[Math.floor(Math.random()*notPicked.length)];
        toDisplay.push(guaranteedNotPicked);
        const notPickedIndex = sourceListCopy.indexOf(guaranteedNotPicked);
        sourceListCopy.splice(notPickedIndex, 1);

        for(let i = 0; i<displayAmount-1; i++){
            const addToList = Math.floor(Math.random()*sourceListCopy.length);
            toDisplay.push(sourceListCopy[addToList]);
            sourceListCopy.splice(addToList, 1);
        }
        return toDisplay;

    }    

    const displayPokemon = getPokemonToDisplay(pokemonList, selectedPokemon, difficulty);
    return (
        <>
            <div className="GameScreen">
                <GameHeader score = {currentScore} scoreToWin = {targetValue}/>
                <ul className="cardGrid">
                    {displayPokemon.map((pokemon) => (
                        
                        <li key={pokemon.id}>
                            <Card pokemon={pokemon}/>
                        </li>

                    ))}
                </ul>

            </div>
        </>
    )

}

export default GameScreen;