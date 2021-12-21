import React from 'react'
import BoardCell from './BoardCell'

const renderRows = (rowCells, onClick) => {
  return rowCells.map((square, index) => {
    return (
      <BoardCell index={index} number={square} key={square} onClick={onClick} />
    )
  })
}

const BoardRow = (props) => {
  return (
    <div style={{ ...props.style }}>
      {renderRows(props.rowCells, props.onClick)}
    </div>
  )
}

export default BoardRow
