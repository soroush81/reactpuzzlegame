import './App.css'
import React from 'react'

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function App() {
  const initialgame = () => {
    let initialState = []

    for (let i = 0; i < 9; i++) {
      let generatedvalue = getRandomArbitrary(1, 9)
      while (initialState.includes(generatedvalue)) {
        generatedvalue = getRandomArbitrary(1, 9)
      }
      initialState = [...initialState, generatedvalue]
      console.log(initialState)
    }
    return initialState
  }
  const [gameState, setGameState] = React.useState(() => initialgame())

  return <div className="App">{gameState}</div>
}

export default App
