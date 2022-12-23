import React, { useState,useEffect } from 'react'

export default function CustomHook({
	initialState
}) {

	const [data, setData] = useState({
		initialState,
		values: {
			'🍔': "",
			'🍨': "",
			'🍿': "",
			'🍵': ""
		},
		result: []
	})


	useEffect(() => {
		updateData()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data.values])
	
	const mostExpensive = () => {
		const sorted = data.initialState.sort((a, b) => b.price - a.price)[0]
		setData({
			...data, result: [{
				name: sorted.name,
				price: sorted.price,
			}]
		})
	}

	const totalPrice = () => {
		let total = 0;

		data.initialState.forEach(element => {
			total += element.amount * element.price
		});

		setData({
			...data, result: [total]
		})

	}

	const saveValues = (values) => {
		setData(prevdata => {
			return { ...prevdata, values }
		})
	
		updateData()

	}

	const updateData = () => {
		console.log(111);
		const f = data.initialState.map(elem => {
			elem.amount -= Number(data.values[elem.name]) || 0
			console.log(Number(data.values[elem.name]));
			return elem
	})
		setData(prevdata => {
			return { ...prevdata, initialState: f }
		})
	
	}
	return [data, { mostExpensive, totalPrice, saveValues }]
}


