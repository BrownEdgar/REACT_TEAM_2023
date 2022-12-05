import React,  { useState, useEffect } from 'react'
import Users from './Users'
import axios from 'axios'
import data from "./data/data.json";


import './App.css'

export default function App() {
const [dataJson, setDataJson] = useState(data)
console.log(dataJson);
 
  const handleDelete = (id) => {
    const f = dataJson.filter(user => user.id !== id)
    setDataJson(f)
  }

  return (
    <div>
      <h1>My Todos</h1>
      <Users dataJson={dataJson} handleDelete={handleDelete} /> 
    </div>
  )
}