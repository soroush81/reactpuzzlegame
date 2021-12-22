import React from 'react'
import * as Constants from '../constants/Constants'

const GameStatus = ({ gameStatus }) => {
  return (
    <div>
      {gameStatus
        ? 'Game Over. you win'
        : `You are now Playing ${Constants.BoardLevel} x ${Constants.BoardLevel}`}
    </div>
  )
}

export default GameStatus
