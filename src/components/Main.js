import { Heading } from './Heading'
import { Products } from './Products'
import classes from './Main.module.scss'

export const Main = () => {
  return (
    <div className={classes.main}>
      <Heading />
      <Products />
    </div>
  )
}
