
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_COUNT, CHANGE_NAME, ADD_ELEMENT } from "./redux/actionTypes";



function App() {
	const count = useSelector(state => state.count);
	const name = useSelector(state => state.name);
	const arr = useSelector(state => state.arr);

	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch({ type: CHANGE_COUNT })
	}

	const handleClick2 = () => {
		dispatch({ type: CHANGE_NAME })
	}
	const handleClick3 = () => {
		dispatch({ type: ADD_ELEMENT })
	}

	return (
		<div className="App">
			<h1>count: {count}</h1>
			<h1>Name: {name}</h1>
			<h1>arr: {JSON.stringify(arr,null, 1)}</h1>
			<button onClick={handleClick}>change count</button>
			<button onClick={handleClick2}> change Name</button>
			<button onClick={handleClick3}> change Name</button>
		</div>
	);
}

export default App;
