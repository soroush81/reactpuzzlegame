import './App.css'
import React from 'react'
import BoardRow from './components/BoardRow'
import * as Constants from './constants/Constants'

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function insertAt(array, index, ...elements) {
  array.splice(index, 0, ...elements)
}

const initialgame = () => {
  let initialState = []

  for (let i = 0; i < Constants.BoardSize - 1; i++) {
    let generatedvalue = getRandomArbitrary(1, Constants.BoardSize)
    while (initialState.includes(generatedvalue)) {
      generatedvalue = getRandomArbitrary(1, Constants.BoardSize)
    }
    initialState = [...initialState, generatedvalue]
  }
  let nullIndex = getRandomArbitrary(1, Constants.BoardSize + 1)
  insertAt(initialState, nullIndex, 0)

  return initialState
}

function App() {
  const [gameState, setGameState] = React.useState(() => initialgame())

  return (
    <div className="App" style={{ borderWidth: 1, borderStyle: 'solid' }}>
      {Array.from(Array(Constants.BoardLevel + 1).keys()).map((i) => (
        <BoardRow
          key={i}
          style={{
            position: 'absolute',
            left: (i - 1) * Constants.BoardLevel * 10,
          }}
          rowCells={gameState.slice(
            Constants.BoardLevel * (i - 1),
            Constants.BoardLevel * i,
          )}
        />
      ))}
    </div>
  )
}

export default App
