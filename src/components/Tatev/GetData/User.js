import React from 'react'


function User({user,handelDelete}) {
  return (
    <article>
      <img src={user.avatar} alt={`user-${user.id}`} />
			<p>Emial: {user.email}</p>
			<p>Name: {user.first_name}</p>
			<p>Surname: {user.last_name}</p>
			<button className='delete-btn' onClick={() => handelDelete(user.id)}>X</button>
    </article>
  )
}

export default User
