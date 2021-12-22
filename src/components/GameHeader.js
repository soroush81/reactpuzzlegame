import React from 'react'
import { Box, Button } from '@material-ui/core'
import GameLevel from './GameLevel'

export const GameHeader = ({
  headerClass,
  onLevelChange,
  onReset,
  movesCount,
  level,
}) => {
  return (
    <Box className={headerClass}>
      <Box style={{ flex: 1 }}>
        <Button variant="contained" onClick={onReset}>
          reset
        </Button>
      </Box>
      <Box style={{ flex: 1 }}>moves : {movesCount}</Box>
      <Box style={{ flex: 1 }}>
        <GameLevel level={level} onSetLevel={onLevelChange} />
      </Box>
    </Box>
  )
}
