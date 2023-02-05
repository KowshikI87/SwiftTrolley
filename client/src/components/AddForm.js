import { useState } from 'react';
import useField from '../hooks/formFieldHook';
import InputGroup from './InputGroup';

const AddForm = ({ onAddProduct }) => {
  const productName = useField("text")
  const productPrice = useField("text")
  const productQuantity = useField("text")
  const [addProductFormVisible, setAddProductFormVisible] = useState(false);

  const handleAddAProductFormClick = (e) => {
    e.preventDefault();
    setAddProductFormVisible(true)
  }

  const handleAddProductClick = async (e) => {
    e.preventDefault();
    let title = productName.value;
    let price = parseFloat(productPrice.value);
    let quantity = parseInt(productQuantity.value, 10);
    let product = { title, price, quantity };

    console.log("about to add product", {product})
    await onAddProduct(product);
    console.log("done adding product. Going to reset the fields")
    productName.resetField()
    productPrice.resetField()
    productQuantity.resetField()
  }

  const handleCancelAddProductClick = (e) => {
    e.preventDefault()
    setAddProductFormVisible(false)
    productName.resetField()
    productPrice.resetField()
    productQuantity.resetField()
  }

  return (
    <div className={`add-form ${addProductFormVisible? "visible" : ""}`}>
      <p><a className="button add-product-button" onClick={handleAddAProductFormClick}>Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <InputGroup htmlFor="product-name" name="Product Name" id="product-name" type={productName.type} onChange={productName.onChange} value={productName.value} />
        <InputGroup htmlFor="product-price" name="Price" id="product-price" type={productPrice.type} onChange={productPrice.onChange} value={productPrice.value} />
        <InputGroup htmlFor="product-quantity" name="Quantity" id="product-quantity" type={productQuantity.type} onChange={productQuantity.onChange} value={productQuantity.value}/>
        <div className="actions form-actions">
          <a className="button" onClick={handleAddProductClick}>Add</a>
          <a className="button" onClick={handleCancelAddProductClick}>Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
