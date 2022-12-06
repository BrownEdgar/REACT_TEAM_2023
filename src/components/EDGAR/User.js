import React from 'react'
import PropTypes from 'prop-types'
export default function User({ user, handelDelete }) {
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

User.propTypes = {
	handelDelete: PropTypes.func.isRequired,
	user: PropTypes.shape({
		id: PropTypes.number,
		avatar: PropTypes.string,
		email: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
	})
}

User.defaultProps = {
	user: []
}
