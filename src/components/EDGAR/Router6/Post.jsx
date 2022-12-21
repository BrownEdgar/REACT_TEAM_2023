import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'

export default function Post() {
	const { id } = useParams()
	const  location = useLocation();
	console.log(location)
	return (
		<div>
			<h1>Duq aycelel eq {id} hamari POST ej</h1>
			{/* <pre>{JSON.stringify(location.state.post, null, 1)}</pre> */}
				<Link to='/posts'>Go back</Link>
		</div>
	)
}
