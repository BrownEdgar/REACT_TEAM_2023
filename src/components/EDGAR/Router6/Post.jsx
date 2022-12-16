import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Post() {
	const { id } = useParams()
	return (
		<div>
			<h1>Duq aycelel eq {id} hamari POST ej</h1>
				<Link to='/posts'>Go back</Link>
		</div>
	)
}
