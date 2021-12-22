import * as Constants from '../constants/Constants'

export const initialgame = () => {
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

export const findNeighborCells = (i, gameState) => {
  let neighborCells = []
  if (i % Constants.BoardLevel !== 0) neighborCells.push(gameState[i - 1]) //left

  if (i - Constants.BoardLevel >= 0)
    neighborCells.push(gameState[i - Constants.BoardLevel]) //top

  if (i + Constants.BoardLevel < Constants.BoardSize)
    neighborCells.push(gameState[i + Constants.BoardLevel]) //Bottom

  if ((i + 1) % Constants.BoardLevel !== 0) neighborCells.push(gameState[i + 1]) //right

  return neighborCells
}

export function CompareGameState(gameState, winState) {
  for (let i = 0; i < gameState.length; i++) {
    if (gameState[i] !== winState[i]) {
      return false
    }
  }

  return true
}

export function getWinState() {
  let winState = Array.from(Array(Constants.BoardSize).keys())
  winState.shift()
  winState.push(0)
  return winState
}

export function getRowCells(i, gameState) {
  return gameState.slice(
    Constants.BoardLevel * (i - 1),
    Constants.BoardLevel * i,
  )
}

export function getBoardSizeArray() {
  return Array.from(Array(Constants.BoardLevel + 1).keys())
}

export function swapCells(firstCellIndex, secondCellIndex, gameState) {
  let newGameState = [...gameState]
  let temp = newGameState[firstCellIndex]
  newGameState[firstCellIndex] = newGameState[secondCellIndex]
  newGameState[secondCellIndex] = temp
  return newGameState
}

export const checkGameOver = (gameState) => {
  const winState = getWinState()
  return CompareGameState(gameState, winState)
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function insertAt(array, index, ...elements) {
  array.splice(index, 0, ...elements)
}
