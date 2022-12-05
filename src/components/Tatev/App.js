import React,  { useState, useEffect } from 'react'
import Usersid from './Usersid'

export default function App() {
	const [data, setdata] = useState([])
	
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then(response => response.json())
			.then(data => setdata(data))
	}, [])

	const handleDelete = () => { 
			const f = data.filter(todo => todo.id !== 4);
		setdata(f)
	 }
	
	return (
		<div >
			<Usersid user={data}/>
			<button onClick={handleDelete}>delete</button>
		</div>
	)
}
