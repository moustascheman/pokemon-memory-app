import GameStatus from "../gamestate";
import Difficulties from "../difficulty";
import { Link } from "react-router-dom";


function MainMenu(props) {

        return (
            <>
            <div className="mainMenuContainer">
                <h1>Select your difficulty</h1>
                <ul>
                    <li>
                        <Link to="game/0">Easy</Link>
                    </li>
                    <li>
                        <Link to="game/1">Medium</Link>
                    </li>
                    <li>
                        <Link to="game/2">Hard</Link>
                    </li>
                </ul>
            </div>
            </>
        )
    
    

}

export default MainMenu;