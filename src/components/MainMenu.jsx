import GameStatus from "../gamestate";
import Difficulties from "../difficulty";



function MainMenu(props) {
    const {status, setDifficulty, changeStatus, difficulty}  = props;

    function changeDifficulty(difficultyLevel){
        setDifficulty(difficultyLevel);
        changeStatus(GameStatus.RUNNING);
    }

    if(status == GameStatus.MAINMENU){
        if()

        return (
            <>
            <div className="mainMenuContainer">
                <h1>Select your difficulty</h1>
                <ul>
                    <li>
                        <button onClick={() => {changeDifficulty(Difficulties.EASY)}}>Easy</button>
                    </li>
                    <li>
                        <button onClick={() => {changeDifficulty(Difficulties.MEDIUM)}}>Medium</button>
                    </li>
                    <li>
                        <button onClick={() => {changeDifficulty(Difficulties.HARD)}}>Hard</button>
                    </li>
                </ul>
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

export default MainMenu;