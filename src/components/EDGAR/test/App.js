import React, { useState } from 'react'
import List from './List'

import "./App.scss"

export default function App() {
	const [data, setData] = useState( [
		{
			id:1,
			name: '🍔',
			price: 30,
			amount: 10,
		},
		{
			id:2,
			name: '🍨',
			price: 20,
			amount: 3,
		},
		{
			id:3,
			name: '🍿',
			price: 10,
			amount: 5,
		},
		{
			id:4,
			name: '🍵',
			price: 5,
			amount: 9,
		},
		{
			id: 5,
			name: 'Pizza',
			price: 7,
			amount: 9,
		},
	])

	// 1․ հաշվել ընդհանուր ապրանքների գինը
	// 2․ փոխանցել id,սրից հետո պետք է այդ id-ով ապրանքի ՛amount՛ արժեքը փոքրացնել 1-ով
	// 3․ ստեղծել ֆորմա 3 input-ով, որոնց մեջ կարելի է գրել համապատասխան value-ը և ավելացնել մեր զանգվածի մեջ

	return (
		<div className='Container'>
			<List data={data} />
		</div>
	)
}
