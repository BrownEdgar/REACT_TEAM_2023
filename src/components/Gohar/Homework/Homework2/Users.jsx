import React from "react"
import User from "./User";

export default function Users({ dataJson, handleDelete }) {
  return (
    
    <div className='users'>
      {
          dataJson.map(elem => {
          return <User name={elem.name} id={elem.id} key={elem.id} handleDelete={handleDelete}/>
          
        })
      }
    </div>  
  )
}