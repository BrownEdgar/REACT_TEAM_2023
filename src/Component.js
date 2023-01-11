import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addFriend, deleteById } from './redux/features/arr'


export default function Component() {
	const arr = useSelector(store => store.arr)
	const dispatch = useDispatch()

	function handleClick(id) {
		dispatch(deleteById(id))
	}

	const addFriendHandler = () => {
		
		dispatch(addFriend({ id: 65, name: 'Gurgen', year: 1990 }))
	 }
	return (
		<div>
			{arr.map(elem =>{
				return (<div key={elem.id}>
					<h1>{elem.name}-{elem.year}</h1>
					<button onClick={() => handleClick(elem.id)}>X</button>
				      </div> )
			})}
				<pre>
					{JSON.stringify(arr,null,1)}
				</pre>
			<button onClick={addFriendHandler}>Add Friend</button>
		</div>
	)
}
