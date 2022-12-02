import React,  { useState, useEffect } from 'react'
import Users from "./Users"
import axios from 'axios'


import './App.css'
import Component from './Component'

export default function App() {
	const [data, setdata] = useState([])
	const [arr, setArr] = useState(["a", "b", "c"])

const handelDelete = (id) => { 
		const f = data.filter(user => user.id !== id)
		setdata(f)
 }

	const getData = () => {
		axios.get('https://reqres.in/api/users')
			.then(response => setdata(response.data.data))
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className='box'>
			<Users data={data} handelDelete={handelDelete}/>
			<Component>
				<h1>Lorem ipsum dolor sit.</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae commodi qui. Perferendis optio ab ex? Maxime voluptate itaque consequatur non. Tenetur velit omnis quo quis sit nulla dolorum pariatur.</p>
				<button>Read more</button>
			</Component> 
		</div>
	)
}

