import React, { useState } from 'react'

const InputForm = ({inputClass, placeholder}) => {
    const [valueInput, setValueInput] = useState('')
  return (
    <div>
      <input type="text" placeholder={placeholder} className={inputClass}  valueInput={valueInput} />
    </div>
  )
}

export default InputForm
