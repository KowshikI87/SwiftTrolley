import axios from "axios";

const Product = ({ productId, description, price, quantity, disabled, onDelete}) => {
  const handleAddToCartClick = async () => {
    console.log(productId);
    await axios.post("/api/add-to-cart", { productId })
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{description}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a className={`button add-to-cart ${disabled ? 'disabled' : ''}`} onClick={handleAddToCartClick}>Add to Cart</a>
          <a className="button edit">Edit</a>
        </div>
        <a className="delete-button" onClick={() => onDelete(productId)}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;




