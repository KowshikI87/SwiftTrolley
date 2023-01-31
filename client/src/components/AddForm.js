const InputGroup = ({ htmlFor, name, id }) => {
  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>{name}</label>
      <input type="text" id={id} defaultValue="" />
    </div>
  )
}

const AddForm = () => {
  return (
    <div className="add-form">
      <p><a className="button add-product-button">Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <InputGroup htmlFor="product-name" name="Product Name" id="product-name" />
        <InputGroup htmlFor="product-price" name="Price" id="product-price" />
        <InputGroup htmlFor="product-quantity" name="Quantity" id="product-quantity" />
        <div className="actions form-actions">
          <a className="button">Add</a>
          <a className="button">Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default AddForm;