import { useProducts } from '../providers/ProductsProvider'
import { Product } from './Product'
// import { ProductDetails } from './ProductDetails'

export const Products = () => {
  const { products, productsLoading, productsError } = useProducts()

  return (
    <>
      {productsLoading && <>Loading...</>}
      {productsError && <>Error Occured</>}
      {products &&
        products.map((product) => {
          return (
            <div key={product.id}>
              <Product product={product} />
            </div>
          )
        })}
    </>
  )
}
