
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSerial } from './redux/features/serials';
import Component from './Component';

function App() {
	const serials = useSelector(state => state.serials);


	const dispatch = useDispatch()

	const handleClick = () => {
		const data = {
			id: 2653,
			title: "Game of Trones",
			ratings: "9.7",
			actors: ['Amilia Klark', 'Jhon Snow', 'Lisa Kudrow', 'Matt LeBlanc', 'Matthew Perry', 'David Schwimmer'],
			poster: "https://wallpapercave.com/wp/wp3256631.jpg"
		}
		dispatch(addSerial(data))
	 }
	return (
		<div className="App">
			{/* <pre>
				{JSON.stringify(serials, null,1)}
			</pre>
			<button onClick={handleClick}>add Serial</button> */}
			<Component />
		</div>
	);
}

export default App;
