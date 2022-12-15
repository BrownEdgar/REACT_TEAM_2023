import React, { useState } from 'react'

import "./App.scss"

export default function App() {
const [password, setpassword] = useState([{
  value: "",
  errorMessage: "Invalid Parameter",
  isValid: true,
  validate: {
    hasTwoNumber: true,
    hasAtleastOneUppercase: true,
    notBeEmpty: true,
    beWithoutaSpace: true,
    required: true,
  }
}])

const validation = (value, options) => {
  let result = true
  if(options.required) {
    result = result && value.trim() !== ""
  }
  if(options.hasTwoNumber) {
    // result = result && password.match()
  }
  if(options.hasAtleastOneUppercase) {
    // result = result && password.
  } 
  if(options.notBeEmpty) {
    // result = result && 
  }
  if(options.beWithoutaSpace) {
     result = result && !password.match(/\s/)
  }
  
  return result
}

const handleChange = (e) => {
  e.preventDefault()
  const isValid = validation(e.target.value, password.validate)
  isValid
  ? setpassword({...password, value: e.target.value, isValid: true})
  : setpassword({...password, isValid: false, value: e.target.value})
  e.target.reset()
}
  

  return (
        <form className='Form'>
          <div className='Form__Group'>
          <input 
              type="password"
              value={password.value}
              placeholder="Enter Your Password"
              onChange={handleChange} />
              {!password.isValid && <p id='error'>{password.errorMessage}</p>}
          </div>
        </form>
  )
  }
