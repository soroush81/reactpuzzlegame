import React from 'react'
import * as Constants from '../constants/Constants'
import { Box } from '@material-ui/core'
const BoardCell = ({ index, number, onClick }) => {
  const backgroundColor = number === 0 ? 'white' : 'lightgreen'
  const color = number === 0 ? 'white' : 'gray'
  return (
    <Box
      key={number}
      onClick={() => onClick(number)}
      style={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'gray',
        position: 'absolute',
        left: Constants.BoardLevel * 10 * index,
        height: Constants.BoardLevel * 10,
        width: Constants.BoardLevel * 10,
        backgroundColor: backgroundColor,
        color: color,
      }}
    >
      {number}
    </Box>
  )
}

export default BoardCell
