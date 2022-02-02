// import { createContext, useContext, useEffect, useMemo, useState } from 'react'

// const viewportContext = createContext({})

// export const ViewportProvider = ({ children }) => {
//   const [windowSize, setWindowSize] = useState()

//   const changeWindowSize = () => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight })
//   }

//   useEffect(() => {
//     window.addEventListener('resize', changeWindowSize)
//     return () => {
//       window.removeEventListener('resize', () => changeWindowSize)
//     }
//   }, [])

//   const value = useMemo(
//     () => ({
//       windowSize,
//     }),
//     [windowSize],
//   )

//   return (
//     <viewportContext.Provider value={value}>
//       {children}
//     </viewportContext.Provider>
//   )
// }

// export const useViewport = () => useContext(viewportContext)
