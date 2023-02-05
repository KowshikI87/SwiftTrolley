import axios from "axios";
import { useState } from "react"
import EditForm from "./EditForm"


const Product = ({ productId, description, price, quantity, disabled, onDelete, onAddToCart, onUpdateProduct}) => {
  const [showEditForm, setShowEditForm] = useState(false)

  const handleEditProduct = () => {
    setShowEditForm(true)
  }

  const handleUpdateProduct = async (id, description, price, quantity) => {
    console.log("type of onUpdateProdut", {onAddToCart})
    await onUpdateProduct(id, description, price, quantity)
    setShowEditForm(false)
  }

  const handleCancelProductUpdate = () => {
    setShowEditForm(false)
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{description}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a className={`button add-to-cart ${disabled ? 'disabled' : ''}`} onClick={() => onAddToCart(productId)}>Add to Cart</a>
          <a className="button edit" onClick={handleEditProduct}>Edit</a>
        </div>
        <a className="delete-button" onClick={() => onDelete(productId)}><span>X</span></a>
      </div>
      {showEditForm ? <EditForm productId={productId} desription={description} price={price} quantity={quantity} 
        onUpdateProduct={handleUpdateProduct} onCancelEditProduct={handleCancelProductUpdate}/> : null}
    </div>
  )
}

export default Product;