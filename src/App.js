import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_ELEMENT, CHANGE_COUNT, CHANGE_NAME } from './redux/actionTypes';

function App() {
	const name = useSelector(state => state.name)
	const count = useSelector(state => state.count)
	const arr = useSelector(state => state.arr)

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
			<h1>Hello: {name}</h1>
			<h1>Count: {count}</h1>
			<h1>Arr: {JSON.stringify(arr, null, 1)}</h1>
			<button onClick={handleClick}>Change count</button>
			<button onClick={handleClick2}>Change Name</button>
			<button onClick={handleClick3}>Add element</button>
		</div>
	);
}

export default App;
