import React, {useState } from 'react'
import MainTable from './MainTable'

export default function App() {
	const [data, setData] = useState([
		{id:1, name: "Terminator", type:"action", "stock": 6, rate: 2},
		{id:2, name: "Terminator", type:"action", "stock": 6, rate: 3},
		{id:3, name: "Terminator", type:"action", "stock": 6, rate: 4},
		{id:4, name: "Terminator", type:"action", "stock": 6, rate: 5},
		{id:5, name: "Terminator", type:"action", "stock": 6, rate: 6},
		{id:6, name: "Terminator", type:"action", "stock": 6, rate: 7},
	])


	const handleDelete = (id) => {
		const f = data.filter(elem => elem.id !== id)
		setData(f)
	}

	return (
		<div>
			<MainTable data={data} handleDelete={handleDelete}/>
		</div>
	)
}
