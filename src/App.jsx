import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GameStatus from './gamestate.js'
import MainMenu from './components/MainMenu.jsx'
import GameOver from './components/GameOver.jsx'
import GameWon from './components/GameWon.jsx'
import Difficulties from './difficulty.js'
import './App.css'

function App() {
  return (
    <>
      <MainMenu/>
    </>
  )
}

export default App
