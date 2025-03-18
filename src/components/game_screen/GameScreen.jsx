import { useState, useRef } from "react";
import GameHeader from "./GameHeader";
import Difficulties from "../../difficulty";
import { DisplayTargets } from "../../difficulty";
import Card from "./Card";
import GameStatus from "../../gamestate";
import GameOverModal from "./GameOverModal";
import '../../styles/GameScreen.css';


function shuffle(source){
    const sourceCopy = [...source];
    for(let i=(sourceCopy.length-1); i>0; i--){
        const toSwap = Math.floor(Math.random()*(i+1));
        const swap1 = sourceCopy[i];
        const swap2 = sourceCopy[toSwap];
        sourceCopy[i] = swap2;
        sourceCopy[toSwap] = swap1;
    }
    return sourceCopy;
}


function GameScreen(props){
    const {difficulty, pokemonList, reload, reloadGame} = props;
    const [targetValue, setTargetValue] = useState(pokemonList.length);
    const [currentScore, setCurrentScore] = useState(0);
    const [selectedPokemon, changeSelectedPokemon] = useState([]);
    const [victory, changeVictoryStatus] = useState(false);
    const [isGameOver, changeGameStatus] = useState(false);
    const modal = useRef();

    function reloadGameScreen(){
        setCurrentScore(0);
        changeSelectedPokemon([]);
        changeVictoryStatus(false);
        changeGameStatus(false);
        reloadGame(!reload);
    }

    function choosePokemon(pokemon){
        if(selectedPokemon.includes(pokemon)){
            changeGameStatus(true);
        }
        else{
            if((currentScore+1) >= targetValue){
                changeVictoryStatus(true);
                changeGameStatus(true);
            }
            else{
                setCurrentScore(currentScore+1);
                changeSelectedPokemon([...selectedPokemon, pokemon]);
            }
        }
    }


    function getPokemonToDisplay(sourceList, selectedList, difficulty){
        const notPicked = [];
        const toDisplay = [];
        const sourceListCopy = [...sourceList];

        let displayAmount = 0;
        if(difficulty == Difficulties.EASY){
                displayAmount = DisplayTargets.EASY;
        }
        else if(difficulty == Difficulties.MEDIUM){
         
                displayAmount = DisplayTargets.MEDIUM;
        }
        else{
            
            displayAmount = DisplayTargets.HARD;
            
        }
        console.log(displayAmount);

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
        return shuffle(toDisplay);

    }    

    const displayPokemon = getPokemonToDisplay(pokemonList, selectedPokemon, difficulty);
    if(isGameOver){
        modal.current?.showModal();
    }
    else {
        modal.current?.close();
    }

    return (
        <>
            <div className="GameScreen">
                <GameHeader score = {currentScore} scoreToWin = {targetValue}/>
                <ul className="cardGrid">
                    {displayPokemon.map((pokemon) => (
                        
                        <li key={pokemon.id}>
                            <Card pokemon={pokemon} onclick = {(poke) => {choosePokemon(poke)}}/>
                        </li>

                    ))}
                </ul>
                <dialog ref = {modal}>
                    <GameOverModal victory={victory} difficulty={difficulty} reload = {()=>{reloadGameScreen()}}/>
                </dialog>
            </div>
        </>
    )

}

export default GameScreen;