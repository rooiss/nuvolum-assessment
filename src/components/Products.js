import { useState } from 'react'
import { useProduct } from '../providers/ProductProvider'
import { useProducts } from '../providers/ProductsProvider'
import { Product } from './Product'
import { ProductDetails } from './ProductDetails'
import classes from './Products.module.scss'

export const Products = () => {
  const { products, productsLoading, productsError } = useProducts()
  const { product, setProduct } = useProduct()

  const [selected, setSelected] = useState(null)

  return (
    <div className={classes.productsContainer}>
      <div className={classes.productsList}>
        {productsLoading && <>Loading...</>}
        {productsError && <>{productsError}</>}
        {products &&
          products.map((item) => {
            return (
              <Product
                key={item.id}
                item={item}
                setProduct={setProduct}
                setSelected={setSelected}
                selected={selected === item.id}
              />
            )
          })}
      </div>
      {selected ? (
        <div className={classes.productDetail}>
          <div className="backButton" onClick={() => setSelected(null)} />
          <ProductDetails product={product} />
        </div>
      ) : null}
    </div>
  )
}
