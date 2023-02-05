const InputGroup = ({ htmlFor, name, id, onChange, inputValue }) => {
  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>{name}</label>
      <input type="text" id={id} value={inputValue} onChange={onChange} />
    </div>
  )
}

export default InputGroup;