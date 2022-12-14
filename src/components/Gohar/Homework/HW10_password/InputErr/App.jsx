import React, { useState } from 'react'

import "./App.scss";

export default function App() {
 const [val, setVal] = useState({
  value:"",
  errorMessage: "Invalid parameter",
  isValid: true,
  validate: {
    minLength:8,
    hasTwoNumbers: true,
    hasUpperCase: true,
    hasNoSpace: true,
    required: true,
  }
 })


 const validation = (value, options) => {
    let result = true

    if (options.hasUpperCase) {
      result = !!(/[A-Z]/).test(value)
      console.log(result);
    }
    if (options.hasTwoNumbers) {
      result = !!(/[0-9].*[0-9]/).test(value)
      console.log(result);
    }
    if (options.hasNoSpace) {
      result = !value.includes(" ")
      console.log(result);
      console.log('err', result)
    }
    if (options.minLength) {
      result = result && value.length >= options.minLength
      console.log(result);
    }
    
    return result;
 }

  const handleChange = (e) => {
    const isValid = validation(e.target.value, val.validate)
    if(isValid){
      setVal({...val, value:e.target.value, isValid:true})
    }else{
      setVal({...val, value:e.target.value, isValid:false})
    }
  }

  return (
    <form className="Form">
      <div className="Form-Group">
        <input 
        type="text"
        value={val.value}
        onChange={handleChange}
         />
      {!val.isValid && <p id="error">{val.errorMessage}</p>}
      </div>
    </form>
  )
}
