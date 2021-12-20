import React from 'react'
import * as Constants from '../constants/Constants'

const BoardCell = ({ number, onClick }) => {
  return (
    <div
      key={number}
      onClick={()=>onClick(number)}
      style={{
        borderWidth: 1,
        borderStyle: 'solid',
        height: Constants.BoardLevel * 10,
        width: Constants.BoardLevel * 10,
      }}
    >
      {number}
    </div>
  )
}

export default BoardCell
