import React,  { useState, useEffect } from 'react'


import './App.css'

export default function App() {
	const [data, setdata] = useState([])
	const [value, setvalue] = useState(0)

		
	 
	
	useEffect(() => {
		fetch(' https://jsonplaceholder.typicode.com/posts?_limit=2')
			.then(response => response.json())
			.then(data => setdata(data))
	}, [])// miayn componenti cnveluc

	return (
		<div >
			{/* <User user={data} /> */}
			{
				data.length 
					? <pre> {JSON.stringify(data, null, 1)}</pre>
					: <h1>push the button to get data</h1>
			}
			<h2>{value}</h2>
			<button onClick={() => setvalue(value + 1)}>add</button>
		</div>
	)
}
