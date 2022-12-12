import React, { useState } from "react"
import Component from "./Component"


function App(){
   const [data,setData] = useState(['html','css','Java Script','React.js','Node.js','Phyton'])
 
   function deleteElement(element){
    
    let newData = data.filter((elem,index) => {
        return index !== element
    })
    
    setData(newData)
   }
  
     return (
     <>
		<Component list={data} deleteElement={deleteElement}/>
    </>
   )
}




export default App