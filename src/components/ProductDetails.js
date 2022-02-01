export const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>${product.price}</h2>
      <p>{product.description}</p>
      <p>
        {product.rating.rate} / 5 {`(${product.rating.count})`}
      </p>
    </div>
  )
}
