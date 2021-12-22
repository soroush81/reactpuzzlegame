import React from 'react'
import { Box } from '@material-ui/core'
const GameLevel = ({ level, onSetLevel }) => {
  //   const levels = ['3', '4', '5', '6']
  return (
    <Box>
      <select value={level} onChange={(e) => onSetLevel(e.target.value)}>
        <option value="3">Easy</option>
        <option value="4">Medium</option>
        <option value="5">Hard</option>
        <option value="6">Expert</option>
      </select>
      {/* <Autocomplete
        value={level}
        onChange={(e) => onSetLevel(e.target.value)}
        disablePortal
        id="cmbLevels"
        options={levels}
        sx={{ width: 100 }}
        renderInput={(params) => <TextField {...params} label="Level" />}
      /> */}
    </Box>
  )
}

export default GameLevel
