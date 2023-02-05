import InputGroup from './InputGroup';
import useField from '../hooks/formFieldHook';

const EditForm = ({productId, title, price, quantity, onUpdateProduct, onCancelEditProduct}) => {
  const productName = useField("text", title)
  const productPrice = useField("text", price)
  const productQuantity = useField("text", quantity)

  return (
    <div className="edit-form">
      <h3>Edit Product </h3>
        <form>
          <InputGroup htmlFor="product-name" name="Product Name" 
            id="product-name" type={productName.type} onChange={productName.onChange} 
            value={productName.value} />

          <InputGroup htmlFor="product-price" name="Price" 
            id="product-price" type={productPrice.type} onChange={productPrice.onChange} 
            value={productPrice.value} />
          
          <InputGroup htmlFor="product-quantity" name="Quantity" 
            id="product-quantity" type={productQuantity.type} onChange={productQuantity.onChange} 
            value={productQuantity.value}/>


          <div className="actions form-actions">
            <a className="button" onClick={() => onUpdateProduct(productId, productName.value, productPrice.value, productQuantity.value) }>Update</a>
            <a className="button" onClick={onCancelEditProduct}>Cancel</a>
          </div>

        </form>
    </div>

  )
}

export default EditForm
