import React,  { useState, useEffect } from 'react'
import Usersid from './Usersid'

export default function App() {
	const [data, setdata] = useState([])
	const [id, setid] = useState(7)
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(data => setdata(data))
	}, [])

	return (
		<div >
			<Usersid user={data}/>
			<button>delete</button>
		</div>
	)
}
