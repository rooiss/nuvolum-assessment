import { createContext, useContext, useEffect, useMemo, useState } from 'react'

// created a cache for faster loading and in the event
// a user would be going to different parts of the app
export const productsCache = {}

const productsContext = createContext({})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null)
  const [productsLoading, setProductsLoading] = useState(null)
  const [productsError, setProductsError] = useState(null)

  // fetch data from api
  useEffect(() => {
    setProductsLoading(true)
    fetch('https://fakestoreapi.com/products?limit=5').then((res) => {
      // if status is greater than 400 then return with error
      if (res.status >= 400) {
        setProductsError(new Error('couldnt retreive data from api'))
        setProductsLoading(false)
        return
      }
      res.json().then((data) => {
        data.forEach((item) => {
          if (!productsCache[item.id]) {
            productsCache[item.id] = item
          }
        })
        setProducts(data)
        setProductsLoading(false)
      })
    })
  }, [])

  const value = useMemo(
    () => ({
      products,
      productsLoading,
      productsError,
    }),
    [products, productsLoading, productsError],
  )

  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  )
}

export const useProducts = () => useContext(productsContext)
