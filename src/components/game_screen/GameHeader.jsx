

function GameHeader (props) {
    const {score, scoreToWin} = props;

    return(
        <>
            <header>
                <h1>Pokemon Game</h1>
                <div>
                    <p>Score: <span>{score}</span></p>
                    <p>To Win: <span>{scoreToWin}</span></p>
                </div>
            </header>
        </>
    )

}
export default GameHeader;