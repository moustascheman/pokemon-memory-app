import GameStatus from "../gamestate";
import Difficulties from "../difficulty";
import { Link } from "react-router-dom";
import pokemonLogo from "../assets/pokemon.svg"
import "../styles/MainMenu.css"


function MainMenu(props) {

        return (
            <>
            <div className="titleCard">
                <img src={pokemonLogo}/>
                <h1>MEMORY GAME</h1>
            </div>
            
            <div className="mainMenuContainer">
                <h2>Select your difficulty</h2>
                <ul>
                    <li>
                        <Link to="game/0">
                            <div className="difficultyButton">Easy</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="game/1">
                            <div className="difficultyButton">Medium</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="game/2">
                            <div className="difficultyButton">Hard</div>
                        </Link>
                    </li>
                </ul>
            </div>
            </>
        )
    
    

}

export default MainMenu;