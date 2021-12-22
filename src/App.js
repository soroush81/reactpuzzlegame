import './App.css'
import React from 'react'
import { Box, Button } from '@material-ui/core'
import BoardRow from './components/BoardRow'
import * as Constants from './constants/Constants'
import GameOverPanel from './components/GameOverPanel'
import GameLevel from './components/GameLevel'
import {
  CompareGameState,
  findNeighborCells,
  initialgame,
  getWinState,
  getRowCells,
  getBoardSizeArray,
} from './utils/GameUtils'
import { useStyles } from './GameStyle.js'

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
      <Box className={classes.HeaderBar}>
        <Box style={{ flex: 1 }}>
          <Button variant="contained" onClick={handleReset}>
            reset
          </Button>
        </Box>
        <Box style={{ flex: 1 }}>moves : {movesCount}</Box>
        <Box style={{ flex: 1 }}>
          <GameLevel level={level} onSetLevel={handleLevelChange} />
        </Box>
      </Box>
      <Box className={classes.GameContainer}>
        {getBoardSizeArray().map((i) => (
          <BoardRow
            key={i}
            style={{
              position: 'absolute',
              top: (i - 1) * Constants.BoardLevel * 10,
            }}
            rowCells={getRowCells(i, gameState)}
            onClick={handleCellClick}
          />
        ))}
        {gameOverState ? <GameOverPanel onReset={handleReset} /> : ''}
      </Box>
    </Box>
  )
}
export default App

{
  /* <div className="board">
        {Array.from(Array(Constants.BoardSize).keys()).map((i, index) => (
          <div key={i} className="square"></div>
        ))}
      </div> */
}
