import { useState } from 'react'
import './App.css'
import Startgame from './components/Startgame'
import GamePlay from './components/GamePlay';

function App() {

  const [isGameStarted , setIsStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsStarted((prev) => !prev)
  };

  return (
   <div>
    {isGameStarted ? <GamePlay/> : <Startgame toggle={toggleGamePlay} />}
    
   </div>
  )
}

export default App
