import React, {useState} from 'react'

function App() {
	const [count, setcount] = useState(0);
	const plusClick = () => {
		setcount(count + 1)
	}
	const minusClick = () => {
		setcount(count - 1)
	}
	const resetClick = () => {
		setcount(0)
	}
	return (
		<div>
			<h1>{count}</h1>
		<button onClick={plusClick}>+ 1</button>
		<button onClick={resetClick}>0</button>
		<button onClick={minusClick}>- 1</button>
		</div>
	)
}

export default App;

