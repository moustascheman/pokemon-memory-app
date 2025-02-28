import GameStatus from "../gamestate";

function GameWon(props){
    const {status, changeStatus} = props;

    if(status == GameStatus.GAMEWON){
        
        return (
            <>
                <div className="GameWonScreen">
                    <h1>Congratulations! You won!</h1>

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

export default GameWon;