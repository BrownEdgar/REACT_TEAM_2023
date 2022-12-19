import React from 'react'
import { Link } from 'react-router-dom';

import "./Posts.scss";

export default function Posts() {

	
	return (
		<div className='PostsList'>
				{
				[...Array(50).fill().map((_, index) => {
					return { id: index + 1, item: `elementName-${index + 1}` }
				})].map(elem => {
					return <Link
						key={elem.id} 
						to={`${elem.id}`}
						className="PostsList-Item">
							<h1>{elem.item}</h1>
					</Link>
				})
				}

		</div>
	)
}
