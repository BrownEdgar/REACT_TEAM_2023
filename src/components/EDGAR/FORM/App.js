import React, { useState, useEffect } from 'react'
import axios from 'axios'


import "./App.scss"

export default function App() {

	const [message, setMessage] = useState("")
	const [todo, setTodo] = useState([])
	const [specialTodo, setspecialTodo] = useState([])

	const getTodoById = title => {
		const t = todo.filter(elem => elem.title.includes(title))
		console.log(t);
		setspecialTodo(t)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setMessage(e.target.elements[0].value);
		e.target.reset()
	}


	useEffect(() => {
		getTodoById(message)
	}, [message])


const x = false

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/todos")
			.then(response => setTodo(response.data))
	}, [])

	return (
		<div className='Container'>
			<h1 className='Container-Title Container-Title_lg'>input value is: {message}</h1>
			<form
				className='Container-Form'
				onSubmit={handleSubmit}
			>
				<input type="text" />
				<input type="submit" value="check" />
			</form>
			<pre className={`
			Container-Value 
			Container-Value_${x ? 'dark' : 'light'}`}>
				{
					specialTodo.map((elem) => {
						return (			
							<span key={elem.id}>{JSON.stringify(elem,null,1)}</span>
						)
					})
				}
			</pre>
		</div>
	)
}
