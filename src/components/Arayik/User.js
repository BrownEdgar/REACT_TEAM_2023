import userEvent from '@testing-library/user-event'
import React from 'react'

export default function User({user}) {
  return (
    <div>
        <p key={user.id}>{user.username}</p>
    </div>
  )
}
