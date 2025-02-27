import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GameStatus from './gamestate.js'
import MainMenu from './components/MainMenu.jsx'
import MemoryGame from './components/MemoryGame.jsx'
import GameOver from './components/GameOver.jsx'
import Difficulties from './difficulty.js'
import './App.css'

function App() {
  const [status, setGameState] = useState(GameStatus.MAINMENU);
  const [selectedDiff, setDifficulty] = useState(undefined);

  return (
    <>
      <MainMenu status={status} setDifficulty={setDifficulty} changeStatus = {setGameState} difficulty = {selectedDiff}/>
      <MemoryGame status={status} difficulty = {selectedDiff} changeStatus = {setGameState}/>
      <GameOver status={status}/>
      <GameOver status = {status} />
    </>
  )
}

export default App
