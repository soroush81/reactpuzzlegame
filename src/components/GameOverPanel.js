import React from 'react'

const GameOverPanel = ({ onReset }) => {
  return (
    <div>
      <div>Game Over. you win</div>
      <button onClick={onReset}>reset</button>
    </div>
  )
}

export default GameOverPanel
