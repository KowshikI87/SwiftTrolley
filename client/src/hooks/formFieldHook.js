import React, { useState } from "react";

const useField = (type, initialValue = '') => {
  const [value, setValue] = useState(initialValue)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const resetField = () => {
    setValue("")
  }

  return {
    type,
    value,
    resetField,
    onChange
  }
}

export default useField;