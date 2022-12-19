import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function ErrorPage() {
	const navigate = useNavigate()

	const goHome = () => {
		navigate("/")
	}
	return (
		<div>
			<h1>404 | Error: page is not found</h1>
			<button onClick={goHome}>Go back</button>
		</div>
	)
}
