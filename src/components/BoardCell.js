import React from 'react'
import * as Constants from '../constants/Constants'

const BoardCell = ({ number }) => {
  return (
    <div
      key={number}
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
