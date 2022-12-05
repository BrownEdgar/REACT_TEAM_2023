import React, { useState,useEffect } from "react"
import Component from "./Component"
import './App.css'


function App(){
    const [data,setData] = useState([])
		
    useEffect( () => {
        fetch(' https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
        .then(data => setData(data))
    },[])

     return (
     <div>
				 <Component list={data} setList={setData}/>
    </div>
   )
}




export default App