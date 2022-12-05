import React from "react"

export default function User({name, id, handleDelete}) {
  return (
    <article>   
      <p>{name}</p>
      <button className='delete-btn' onClick={() => handleDelete(id)}>Delete</button>
    </article>
  )
}