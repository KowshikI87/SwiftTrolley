import axios from 'axios';
import { useState } from 'react';

const InputGroup = ({ htmlFor, name, id, onChange, inputValue }) => {
  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>{name}</label>
      <input type="text" id={id} value={inputValue} onChange={onChange} />
    </div>
  )
}

const AddForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [addProductFormVisible, setAddProductFormVisible] = useState(false);


  const handleAddAProductFormClick = (e) => {
    e.preventDefault();
    setAddProductFormVisible(true)
  }

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  }

  const handlePriceChange = (e) => {
    setProductPrice(e.target.value);
  }

  const handleQuantityChange = (e) => {
    setProductQuantity(e.target.value);
  }

  const handleAddProductClick = async (e) => {
    e.preventDefault();
    let title = productName;
    let price = parseFloat(productPrice);
    let quantity = parseInt(productQuantity, 10);
    let product = { title, price, quantity };

    console.log("about to addd product", {product})
    await onAddProduct(product, setProductName, setProductPrice, setProductQuantity);
    console.log("done adding product. Going to reset the fields")
    setProductName('');
    setProductPrice('');
    setProductQuantity('');
  }

  const handleCancelAddProductClick = (e) => {
    e.preventDefault();
    setProductName('');
    setProductPrice('');
    setProductQuantity('');
    setAddProductFormVisible(false);
  }

  return (
    <div className={`add-form ${addProductFormVisible? "visible" : ""}`}>
      <p><a className="button add-product-button" onClick={handleAddAProductFormClick}>Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <InputGroup htmlFor="product-name" name="Product Name" id="product-name" onChange={handleNameChange} inputValue={productName} />
        <InputGroup htmlFor="product-price" name="Price" id="product-price" onChange={handlePriceChange} inputValue={productPrice} />
        <InputGroup htmlFor="product-quantity" name="Quantity" id="product-quantity" onChange={handleQuantityChange} inputValue={productQuantity} />
        <div className="actions form-actions">
          <a className="button" onClick={handleAddProductClick}>Add</a>
          <a className="button" onClick={handleCancelAddProductClick}>Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
