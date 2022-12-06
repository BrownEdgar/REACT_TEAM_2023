import React, { useState } from 'react'
import Component from '../../Tatev/Todos/Component'

import '../../Tatev/Todos/App.css'

function App() {
	const [data, setdata] = useState([{ name: 'html' }, { name: 'CSS' }, { name: 'Javas Script' }, { name: 'React.js' }, { name: 'Node.js' }, { name: 'Python' }]);

	const [arr, setArr] = useState(['a', 'b', 'c'])
	const handelDelete = (name) => {
		const foo = data.filter(elem => elem.name !== name)
		setdata(foo)
	}

	const func = (i) => {
		const f = [...arr]
		f.splice(i, 1)
		setArr(f)
	}
	return (
		<div className='App'>
			<h1>My Todos</h1>
			<Component data={data} handelDelete={handelDelete} />
			<hr />
			{
				arr.map((el, index) => {
					return <div key={index}>
						{el}
						<button onClick={() => func(index)}>x</button>
					</div>
				})
			}
		</div>

	)
}

export default App