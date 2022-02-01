// import { useEffect, useState } from 'react'
// import { productsCache, useProducts } from '../providers/ProductsProvider'

// export const useProduct = (id) => {
//   const [product, setProduct] = useState(null)

//   const { productsLoading, productsError } = useProducts()

//   useEffect(() => {
//     if (!productsLoading && !productsError) {
//       setProduct(productsCache[id])
//     }
//   }, [productsLoading, productsError, id])

//   return { product, productsLoading, productsError, setProduct }
// }
