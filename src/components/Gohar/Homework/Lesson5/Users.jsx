import React from "react"
import User from "./User";

export default function Users({data, handleDelete}) {
  return (
    <div className='users'>
      {
        data.map(elem =>{
          return <User user={elem} key={elem.id} handleDelete ={handleDelete}/>
        })
      }
    </div>  
  )
}