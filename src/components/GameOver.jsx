import GameStatus from "../gamestate";


function GameOver(props){
    const {status, changeStatus} = props;

    if(status == GameStatus.GAMEOVER){
        return (
            <>
                <div className="GameOverScreen">
                    <h1>Game Over! Please try again!</h1>

                    <button onClick={() => {
                        changeStatus(GameStatus.MAINMENU);
                    }}>Return to Main Menu</button>

                    <button onClick={() => {
                        changeStatus(GameStatus.RUNNING);
                    }}>Play Again</button>

                </div>
            </>
        )
    }

    return (
        <>
        </>
    )
}

export default GameOver;