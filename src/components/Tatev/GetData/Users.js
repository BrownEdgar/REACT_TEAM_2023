import React from 'react'
import User from '../../Tatev/GetData/User'


function Users({ data, handelDelete }) {
  return (
    <div className='users'>
		{
			data.map(elem => {
				return <User user={elem} key={elem.id} handelDelete={handelDelete}/> 
			})
		}
	</div>
  )
}

export default Users
