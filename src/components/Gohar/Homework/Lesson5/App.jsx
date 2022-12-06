import React,  { useState, useEffect, Fragment } from 'react'
import Users from './Users'
import axios from 'axios'


import './App.css'

export default function App() {
  const [data, setData] = useState([])
  const [arr, setArr] = useState(["a","b","c"])
  const handleDelete = (id) => {
    const f = data.filter(user => user.id !== id)
    setdata(f)
  }
 

  const getData = () => {
    axios.get('https://reqres.in/api/users')
    .then(response => setdata(response.data.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <>
    <Users data={data} handleDelete={handleDelete}/>
   
      {
        arr.map(elem => {
          return <Fragment key={Math.random}> {elem} </Fragment>
        })
      }
    </>
  )
}