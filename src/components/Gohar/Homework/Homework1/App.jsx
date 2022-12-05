import React,  { useState, useEffect } from 'react'
import FetchingItems from './FetchingItems'

import './App.css'

export default function App() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then(response => response.json())
			.then(data => setData(data))
	}, [])

	const handleDelete = (id) => {
		const copy = [...data]
		setData(copy.filter(elem => elem.id !== id))
	}
	console.log(data);

	return (
		<div className="div">
			{data.map(elem => {
				return (
					<FetchingItems
						key={elem.id}
						id={elem.id}
						title={elem.title}
						handleDelete={handleDelete}
					/>
				)
			})}
		</div>
	)
}
