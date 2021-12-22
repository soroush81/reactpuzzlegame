import './App.css'
import React from 'react'
import { Box } from '@material-ui/core'
import GameStatus from './components/GameStatus'
import { useStyles } from './GameStyle.js'
import { GameHeader } from './components/GameHeader'
import GameBoard from './components/GameBoard'
import {
  findNeighborCells,
  initialgame,
  swapCells,
  checkGameOver,
} from './utils/GameUtils'

function App() {
  const classes = useStyles()

  const [gameState, setGameState] = React.useState(() => {
    const savedGameState = window.localStorage.getItem('gameState')
    return savedGameState !== null ? JSON.parse(savedGameState) : initialgame()
  })
  const [gameStatus, setGameStatus] = React.useState(false)
  const [movesCount, setMovesCount] = React.useState(0)
  const [level, setLevel] = React.useState(3)

  React.useEffect(() => {
    setGameStatus(checkGameOver(gameState))
    window.localStorage.setItem('gameState', JSON.stringify(gameState))
  }, [gameState])

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

    //set game state and moveCounts
    setGameState(swapCells(clickedCellIndex, zeroIndex, gameState))
    setMovesCount(movesCount + 1)
  }

  const handleReset = () => {
    setGameState(initialgame())
    setGameStatus(false)
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
        <GameStatus gameStatus={gameStatus} />
      </Box>
    </Box>
  )
}
export default App
