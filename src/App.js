import './App.css'
import React from 'react'
import { Box } from '@material-ui/core'
import GameOverPanel from './components/GameOverPanel'
import {
  CompareGameState,
  findNeighborCells,
  initialgame,
  getWinState,
} from './utils/GameUtils'
import { useStyles } from './GameStyle.js'
import { GameHeader } from './components/GameHeader'
import GameBoard from './components/GameBoard'

function App() {
  const classes = useStyles()

  const [gameState, setGameState] = React.useState(() => {
    const savedGameState = window.localStorage.getItem('gameState')
    return savedGameState !== null ? JSON.parse(savedGameState) : initialgame()
  })
  const [gameOverState, setGameOverState] = React.useState(false)
  const [movesCount, setMovesCount] = React.useState(0)
  const [level, setLevel] = React.useState(3)

  React.useEffect(() => {
    checkGameOver(gameState)
    window.localStorage.setItem('gameState', JSON.stringify(gameState))
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
  }

  const handleCellClick = (i) => {
    if (i === 0) return

    //find neighborCells
    let clickedCellIndex = gameState.indexOf(i)
    let neighborCells = findNeighborCells(clickedCellIndex, gameState)

    //check if there is zero cell in neighbors
    const zeroExistsInNeighbors = neighborCells.indexOf(0)
    if (zeroExistsInNeighbors === -1) return

    //swap zero cell and selectedcell
    const zeroIndex = gameState.indexOf(0)
    swapCells(clickedCellIndex, zeroIndex)
  }

  const handleReset = () => {
    setGameState(initialgame())
    setGameOverState(false)
    setMovesCount(0)
  }

  const handleLevelChange = (e) => {
    setLevel(e.target.value)
  }

  return (
    <Box className="App">
      <GameHeader
        headerClass={classes.HeaderBar}
        movesCount={movesCount}
        onReset={handleReset}
        onLevelChange={handleLevelChange}
        level={level}
      />
      <Box className={classes.GameContainer}>
        <GameBoard gameState={gameState} onCellClick={handleCellClick} />
        {gameOverState ? <GameOverPanel onReset={handleReset} /> : ''}
      </Box>
    </Box>
  )
}
export default App
