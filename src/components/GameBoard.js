import React from 'react'
import { Box } from '@material-ui/core'
import { getBoardLevelArray, getRowCells } from '../utils/GameUtils'
import * as Constants from '../constants/Constants'
import BoardRow from './BoardRow'
const GameBoard = ({ gameState, onCellClick }) => {
  return (
    <Box>
      {getBoardLevelArray().map((i) => (
        <BoardRow
          key={i}
          style={{
            position: 'absolute',
            top: (i - 1) * Constants.BoardLevel * 10,
          }}
          rowCells={getRowCells(i, gameState)}
          onClick={onCellClick}
        />
      ))}
    </Box>
  )
}

export default GameBoard
