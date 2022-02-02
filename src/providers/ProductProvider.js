import { createContext, useContext, useMemo, useState } from 'react'

const productContext = createContext({})

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null)

  const value = useMemo(
    () => ({
      product,
      setProduct,
    }),
    [product, setProduct],
  )

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  )
}

export const useProduct = () => useContext(productContext)
