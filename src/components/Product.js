import './product.scss'

export const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt="product" className="productImage" />
      <h3>{product.title}</h3>
      {/* <button> */}
      <i className="chevron" />
      {/* </button> */}
    </div>
  )
}
