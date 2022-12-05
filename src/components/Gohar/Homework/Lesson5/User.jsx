import React from "react"

export default function User({user, handleDelete}) {
  return (
    <article>
      <img src={user.avatar} alt={`user-${user.id}`} />
      <p>Email: {user.email}</p>
      <p>Name: {user.first_name}</p>
      <p>Surname: {user.last_name}</p>
      <button className='delete-btn' onClick={() => handleDelete(user.id)}>X</button>
    </article>
  )
}