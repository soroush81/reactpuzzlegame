import { createContext } from 'react'

const levelContext = createContext({
  level: 3,
  size: level ** 2,
})

export default authContext
