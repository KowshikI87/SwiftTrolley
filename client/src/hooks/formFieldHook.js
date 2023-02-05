import React, { useState } from "react";

const useField = (type) => {
  const [value, setValue] = useState('')

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