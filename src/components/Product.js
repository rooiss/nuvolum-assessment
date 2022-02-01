export const Product = ({ product }) => {
  return (
    <>
      <div>
        <img src={product.image} alt="product" />
        <h3>{product.title}</h3>
        <button>Chevron Icon here</button>
      </div>
    </>
  )
}
