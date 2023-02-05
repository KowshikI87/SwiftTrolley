const InputGroup = ({ htmlFor, name, type, id, value, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={htmlFor}>{name}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  )
}

export default InputGroup;