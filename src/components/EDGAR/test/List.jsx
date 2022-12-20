import React from 'react'

export default function List({data}) {
	return (
		<div>
			{
				data.map(elem => {
					return (
						<React.Fragment key={elem.id}>
								<h3>Name: {elem.name}</h3>
								<h3>price: {elem.price}</h3>
								<h3>Amount: {elem.amount}</h3>
								<hr />
						</React.Fragment>
					)
				})
			}
		</div>
	)
}
