import React, { useState, useEffect } from 'react';

function App() {
	const [seltValue, setSeltValue] = useState("")
	const handlerSubmit = (e) => {
		e.preventDefault()
	}

	const selectchage = (e) => { 
		console.log(e.target.value);
		setSeltValue(e.target.value)
	 }
	

	 
	
	return (
		<div className="App">
			<h2>Value is: {seltValue}</h2>
			<form onSubmit={handlerSubmit}>
				<select name="list" id="list" onChange={selectchage} value={seltValue}>
					<option value=""></option>
					<option value="css">css</option>
					<option value="html">Html</option>
					<option value="javascript">Java script</option>
					<option value="react">React</option>
				</select>
			</form>
		</div>
	);
}

export default App;
