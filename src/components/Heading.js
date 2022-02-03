import classes from './Heading.module.scss'

export const Heading = () => {
  return (
    <div className={classes.header}>
      <h1>Fake Store Front</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer augue
        augue, molestie vitae tempor vel, sollicitudin in dolor.
      </p>
    </div>
  )
}
