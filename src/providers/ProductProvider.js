import { createContext, useContext, useMemo, useState } from 'react'
import { useProducts } from './ProductsProvider'

const productContext = createContext({})

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null)

  const { productsLoading, productsError } = useProducts()

  console.log('product from provider', product)

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
