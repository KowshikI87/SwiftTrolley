const Product = ({ item, quantity, price}) => {
  return (
    <div className="product">
      <div className="product-details">
        <h3>{description}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a className={`button add-to-cart ${disabled ? 'disabled' : ''}`} onClick={() => onAddToCart(productId)}>Add to Cart</a>
          <a className="button edit">Edit</a>
        </div>
        <a className="delete-button" onClick={() => onDelete(productId)}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;