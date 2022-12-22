import React, { useState} from 'react'
import Products from './Products'
import "./App.scss"

export default function App() {
    const [product, setProduct] = useState([
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
            name: "Pizza",
            price: 7,
            amount: 9,
        },
    ])
  return (
    <div className='Container'>
        <Products product={product} />
    </div>
  )
}
