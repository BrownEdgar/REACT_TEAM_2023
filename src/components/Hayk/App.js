import axios from "axios"
import React, { useState,useEffect } from "react"
import Component from   './Component'


function App(){
const [data,setData] = useState([])
let [lod,setLod] = useState(null)

const getData = () => {
  setLod(false)
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => setData(response.data))
  .catch(err => console.log(err))
  setLod(true)
}

useEffect(() => {
    setTimeout(() =>{
      getData()
    },3000)
  },[])


     return (
     <>
   
     {lod ?
      <Component list={data}/>:
      <h1>Loading....</h1>
     }
    </>
   )
}




export default App