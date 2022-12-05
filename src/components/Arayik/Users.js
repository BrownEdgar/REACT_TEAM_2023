import React from 'react'
import User from './User'

export default function Users({data}) {
  return (
    <div className='users'>
      {
        data.map(elem => {
            return <User  user={elem.username} key={elem.id}/>
        })
      }
    </div>
  )
}
