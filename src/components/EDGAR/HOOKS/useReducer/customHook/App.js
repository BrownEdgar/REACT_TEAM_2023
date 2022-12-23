import React from 'react'
import CustomHook from './CustomHook'

import "./App.scss"
const initialState = [
	{
		id: 1,
		name: '🍔',
		price: 30,
		amount: 10,
		category: "fast food"
	},
	{
		id: 2,
		name: '🍨',
		price: 20,
		amount: 3,
		category: "sweet"
	},
	{
		id: 3,
		name: '🍿',
		price: 10,
		amount: 5,
		category: "snack"
	},
	{
		id: 4,
		name: '🍵',
		price: 5,
		amount: 9,
		category: "soup"
	},]

export default function App() {
	const [data, { mostExpensive, totalPrice, saveValues }] = CustomHook({ initialState })

	const handleSubmit = (e) => { 
		e.preventDefault()
		const { iceCreame, burger, corn, soup } = e.target;
		const values = {
			'🍔': burger.value,
			'🍨': iceCreame.value,
			'🍿': corn.value,
			'🍵': soup.value
		}
		saveValues(values)
		e.target.reset()
	 }
	return (
		<div>
			<pre>
				{JSON.stringify(data, null, 1)}
			</pre>
			<button onClick={mostExpensive}>get most Expensive product</button>
			<button onClick={totalPrice}>get total</button>

			<pre> 
				{JSON.stringify(data.result,null,1)}
			</pre>
			<form onSubmit={handleSubmit}>
				<label htmlFor="burger">'🍔'</label>
				<input type="number" id="burger" min={0} max={data.initialState[0].amount}/>
				<label htmlFor="iceCreame">'🍨'</label>
				<input type="number" id="iceCreame" min={0}/>
				<label htmlFor="corn">'🍿'</label>
				<input type="number" id="corn"  min={0}/>
				<label htmlFor="soup">'🍵'</label>
				<input type="number" id="soup" min={0}/>

				<input type="submit" value="Total sum" />
			</form>

		</div>
	)
}
