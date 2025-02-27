import { useState } from "react";
import GameHeader from "./GameHeader";
import Difficulties from "../../difficulty";
import { DisplayTargets } from "../../difficulty";





function GameScreen(props){
    const {changeStatus, difficulty, pokemonList} = props;
    const [targetValue, setTargetValue] = useState(pokemonList.length);
    const [currentScore, setCurrentScore] = useState(0);
    const [selectedPokemon, changeSelectedPokemon] = useState([]);
    
    function getPokemonToDisplay(sourceList, selectedList, difficulty){
        const notPicked = [];
        const toDisplay = [];

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

        sourceList.map((pokemon) => {
            if(!selectedList.includes(pokemon)){
                notPicked.push(pokemon);
            }
        })
        const guaranteedNotPicked = notPicked[Math.floor(Math.random()*notPicked.length)];
        toDisplay.push(guaranteedNotPicked);
        const notPickedIndex = pokemonList.indexOf(guaranteedNotPicked);


    }    

    return (
        <>
            <body className="GameScreen">
                <GameHeader score = {currentScore} scoreToWin = {targetValue}/>
                <ul className="cardGrid">

                </ul>

            </body>
        </>
    )

}

export default GameScreen;