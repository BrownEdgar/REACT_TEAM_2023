import React from 'react'

export default function User({user}) {
	return (
		<div className='user'>
			{
				Object.keys(user).map(elem => {
					return <h1>{elem} : {user[elem]}</h1>
				})
			}
		</div>
	)
}
