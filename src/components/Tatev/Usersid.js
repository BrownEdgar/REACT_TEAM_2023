import React from 'react'

function Usersid({user}) {
	return (
		<div className='user'>
			{
				Object.keys(user).map(elem => {
					return <h1>{user[elem]}</h1>
				})
			}
            {
				user.length 
                ? <pre> {JSON.stringify(user, null, 1)}</pre>
				: <h1>push the button to get data</h1>
			}
		</div>
	)
}

export default Usersid;