import React from 'react'
import BoardCell from './BoardCell'

const renderRows = (rowCells) => {
  return rowCells.map((square) => {
    return <BoardCell number={square} key={square} />
  })
}

const BoardRow = (props) => {
  return <div style={props.style}>{renderRows(props.rowCells)}</div>
}

export default BoardRow
