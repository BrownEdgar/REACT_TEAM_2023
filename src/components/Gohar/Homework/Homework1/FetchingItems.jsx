import React from 'react'
import './App.css'

export default function FetchingItems({ id, title, handleDelete }) {
  return (
    <div className="divs">
      <p>{id}</p>
      <h3>{title}</h3>
      <button className="btn" onClick={() => handleDelete(id)}>Delete todo {id}</button>
    </div>
  )
}
