import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  HeaderBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightGray',
    height: 60,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
  },
  GamePanel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
    width: '100vw',
    position: 'relative',
  },
  BoardRow: {
    position: 'absolute',
  },
})

export { useStyles }
