import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

import "./Posts.scss";

export default function Posts() {
const [data, setdata] = useState([])

	useEffect(() => {
		function getData() {
			axios.get("https://jsonplaceholder.typicode.com/posts")
				.then(response => setdata(response.data) )
		}
		getData()
	}, [])


	
	return (
		<div className='PostsList'>
				{
				data.map(elem => {
					return <Link
						key={elem.id} 
						to={`${elem.id}`}
						state={{ post: elem }}
						className="PostsList-Item">
							<h1>{elem.title}</h1>
					</Link>
				})
				}

		</div>
	)
}
