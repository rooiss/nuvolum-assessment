import { useProduct } from '../providers/ProductProvider'
import { useProducts } from '../providers/ProductsProvider'
import { Product } from './Product'
import classes from './Products.module.scss'
import { ProductDetails } from './ProductDetails'

export const Products = () => {
  const { products, productsLoading, productsError } = useProducts()
  const { product, setProduct } = useProduct()

  return (
    <div className={classes.productsContainer}>
      <div className={classes.productsList}>
        {productsLoading && <>Loading...</>}
        {productsError && <>{productsError}</>}
        {products &&
          products.map((item) => {
            return (
              <div key={item.id}>
                <Product item={item} setProduct={setProduct} />
              </div>
            )
          })}
      </div>
      <div className={classes.productDetail}>
        {product && <ProductDetails product={product} />}
      </div>
    </div>
  )
}
