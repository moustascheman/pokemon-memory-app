import {useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";


function GameOverModal(props){
    const {victory, reload, difficulty} = props;

    const ref = useRef();
    

    if(victory){
        return (
            <>
                <h1>Congratulations! You Won!</h1>
                <Link to="/">Return to Main Menu</Link>
                <Link to ={'/game/'+difficulty} onClick={() => {
                    reload()}
                    }>Play Again</Link>
            </>
        );
    }
    else {
        return (
            <>
                <h1>Game Over! You lost!</h1>
                <Link to="/">Return to Main Menu</Link>
                <Link to ={'/game/'+difficulty} onClick={() => {
                    reload()}}>
                        Play Again
                </Link>
            </>
        );
    }


    
}
export default GameOverModal;