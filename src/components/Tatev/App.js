import React,  { useState, useEffect } from 'react'
import Usersid from './Usersid'

export default function App() {
	const [data, setdata] = useState([])
	const [value, setvalue] = useState(0)
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
