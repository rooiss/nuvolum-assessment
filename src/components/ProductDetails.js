import classes from './ProductDetails.module.scss'

export const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>${product.price.toFixed(2)}</h2>
      <p>{product.description}</p>
      <div className={classes.starContainer}>
        <div
          className={classes.stars}
          style={{ '--rating': product.rating.rate }}
          aria-label={`${product.rating.rate} / 5 rating of product`}
        />
        <p>{`(${product.rating.count})`}</p>
      </div>
      <button className={classes.addToCartBtn}>Add to Cart</button>
    </div>
  )
}
