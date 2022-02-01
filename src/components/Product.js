import classes from './Product.module.scss'

export const Product = ({ item, setProduct, setOpen, open, selected }) => {
  const productHandler = () => {
    setProduct(item)
  }

  return (
    <div className={classes.item}>
      <img
        src={item.image}
        alt="item"
        className={classes.itemImage}
        onClick={productHandler}
      />
      <h4 className={classes.itemTitle} onClick={productHandler}>
        {item.title}
      </h4>
      <span
        className={selected ? classes.chevronRight : classes.chevronLeft}
        onClick={productHandler}
      />
    </div>
  )
}
