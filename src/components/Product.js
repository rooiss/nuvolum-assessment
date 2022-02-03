import classes from './Product.module.scss'
import cn from 'clsx'

export const Product = ({ item, setProduct, selected, setSelected }) => {
  // product and item were named differently for the provider and the mapped items
  // in the event that there were to be more items/for scalability
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
          sizes="(max-width: 150px)"
          width="150"
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
