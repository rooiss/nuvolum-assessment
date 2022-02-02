import classes from './Product.module.scss'
import cn from 'clsx'

export const Product = ({ item, setProduct, selected, setSelected }) => {
  const productHandler = () => {
    if (selected) {
      setSelected(null)
      setProduct(null)
      return
    }
    setSelected(item.id)
    setProduct(item)
  }

  return (
    <div className={cn(classes.item, { [classes.selected]: selected })}>
      <div className={classes.imageAndDescription}>
        <img
          src={item.image}
          alt="item"
          className={classes.itemImage}
          onClick={productHandler}
        />
        <h4 className={classes.itemTitle} onClick={productHandler}>
          {item.title}
        </h4>
      </div>
      <span
        className={selected ? classes.chevronOpen : classes.chevronClose}
        onClick={productHandler}
      />
    </div>
  )
}
