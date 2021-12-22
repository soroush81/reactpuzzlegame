import React from 'react'
import BoardCell from './BoardCell'
import { Box } from '@material-ui/core'
const renderRows = (rowCells, onClick) => {
  return rowCells.map((square, index) => {
    return (
      <BoardCell index={index} number={square} key={square} onClick={onClick} />
    )
  })
}

const BoardRow = (props) => {
  return (
    <Box style={{ ...props.style }}>
      {renderRows(props.rowCells, props.onClick)}
    </Box>
  )
}

export default BoardRow
