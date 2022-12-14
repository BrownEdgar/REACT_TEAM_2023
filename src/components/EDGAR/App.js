import React,  { useState, useEffect } from 'react';
import Users from "./Users";
import axios from 'axios';


import './App.css'
import TableLoader from "./Loaders/TableLoader";
import { BulletList } from 'react-content-loader'


export default function App() {
	const [data, setdata] = useState([])
	const [loading, setloading] = useState(true)


const handelDelete = (id) => { 
		const f = data.filter(user => user.id !== id)
		setdata(f)
 }

	const getData = () => {
		setloading(true)
		axios.get('https://reqres.in/api/users')
			.then(response => setdata(response.data.data))
			.catch(err => console.log(err))
		setloading(false)
	}

	useEffect(() => {
			getData()
	}, [])

	return (
		<div className='box'>
			<h1>Lorem ipsum dolor sit amet.</h1>
		{
				!loading 
					? <TableLoader />
				: <Users data={data} handelDelete={handelDelete} />
		}
		</div>
	)
}

