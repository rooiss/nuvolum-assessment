import classes from './Product.module.scss'

export const Product = ({ product }) => {
  return (
    <div className={classes.product}>
      <img src={product.image} alt="product" className={classes.productImage} />
      <h4 className={classes.productTitle}>{product.title}</h4>
      <i className={classes.chevron} />
    </div>
  )
}
