import InputGroup from './InputGroup';

const EditForm = () {
  return (
    <div class="edit-form">
    <h3>Edit Product </h3>
      <form>
        <InputGroup htmlFor="product-name" name="Product Name" id="product-name"   />
        //going to have 3 input groups
        //would conditinally render the edit form
        //"update" click would update the produt and rerender the form
        //"cancel" would hide the edit form

      </form>
    </div>

  )
}



<InputGroup htmlFor="product-name" name="Product Name" id="product-name" onChange={handleNameChange} inputValue={productName} />




const InputGroup = ({ htmlFor, name, id, onChange, inputValue }) => {
  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>{name}</label>
      <input type="text" id={id} value={inputValue} onChange={onChange} />
    </div>
  )
}
