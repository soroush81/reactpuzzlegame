import './App.css'
import React from 'react'
import BoardRow from './components/BoardRow'
import * as Constants from './constants/Constants'
import GameOverPanel from './components/GameOverPanel'
import {
  CompareGameState,
  findNeighborCells,
  initialgame,
  getWinState,
} from './utils/GameUtils'
import { findAllInRenderedTree } from 'react-dom/cjs/react-dom-test-utils.production.min'

function App() {
  const [gameState, setGameState] = React.useState(() => initialgame())
  const [gameOverState, setGameOverState] = React.useState(false)
  const [movesCount, setMovesCount] = React.useState(0)

  React.useEffect(() => {
    checkGameOver(gameState)
  }, [gameState])

  const checkGameOver = () => {
    const winState = getWinState()
    if (CompareGameState(gameState, winState)) setGameOverState(true)
  }

  function swapCells(clickedCellIndex, zeroIndex) {
    let newGameState = [...gameState]
    let temp = newGameState[clickedCellIndex]
    newGameState[clickedCellIndex] = newGameState[zeroIndex]
    newGameState[zeroIndex] = temp
    setGameState(newGameState)
    setMovesCount(movesCount + 1)
    findAllInRenderedTree(movesCount)
  }

  const handleCellClick = (i) => {
    if (i === 0) return
    let clickedCellIndex = gameState.indexOf(i)
    let neighborCells = findNeighborCells(clickedCellIndex, gameState)
    const zeroExistsInNeighbors = neighborCells.indexOf(0)
    if (zeroExistsInNeighbors === -1) return

    const zeroIndex = gameState.indexOf(0)
    swapCells(clickedCellIndex, zeroIndex)
  }

  const handleReset = () => {
    setGameState(initialgame())
    setGameOverState(false)
    setMovesCount(0)
  }

  return (
    <div className="App">
      <div
        style={{
          borderColor: 'red',
          borderStyle: 'solid',
          borderWidth: 1,
          width: '100%',
          height: '100vh',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {Array.from(Array(Constants.BoardLevel + 1).keys()).map((i) => (
          <BoardRow
            key={i}
            style={{
              position: 'absolute',
              top: (i - 1) * Constants.BoardLevel * 10,
            }}
            rowCells={gameState.slice(
              Constants.BoardLevel * (i - 1),
              Constants.BoardLevel * i,
            )}
            onClick={handleCellClick}
          />
        ))}
        <div>moves : {movesCount}</div>
        <div>
          {gameOverState ? <GameOverPanel onReset={handleReset} /> : ''}
        </div>
      </div>
    </div>
  )
}

export default App
