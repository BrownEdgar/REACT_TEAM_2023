import React, { useState } from 'react';

function App() {
	const [value, setvalue] = useState(0)

	const clickPlus = () => {
		setvalue((prevValue) => {
			return prevValue + 6
		}) 
		setvalue((prevValue) => {
			return prevValue + 5
		})
	}

	const clickMinus = () => {
		setvalue(value - 1)
	}



	return (
		<div className="App">
			<h1>{value}</h1>
			<div className="btn">

				<button onClick={clickMinus}> - 1 </button>

				<button onClick={clickPlus}> + 1 </button>

			</div>

		</div>
	)
}

export default App