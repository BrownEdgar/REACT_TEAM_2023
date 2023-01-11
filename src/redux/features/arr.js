const DELETE_ID = 'DELETE_ID'
const ADD_FRIEND = 'ADD_FRIEND'

export function arrReduser(state = [], action) {
	if(action.type === DELETE_ID) {
		let newArr = state.filter(elem => {
			return action.payload.id !== elem.id
		})
		return newArr;
	}
	if (action.type === ADD_FRIEND) {
		return [...state, action.payload]
	}
	return state;
}

export const initialArrValue = [
	{ id: 1, name: 'Wes', year: 1988 },
	{ id: 2, name: 'Kait', year: 1986 },
	{ id: 3, name: 'Irv', year: 1970 },
	{ id: 4, name: 'Lux', year: 2015 }
];


export function deleteById(id) {
	  return {
			type:DELETE_ID,
			payload: {
				id,
			}
		}
}

export function addFriend(friend) {

	return {
		type: ADD_FRIEND,
		payload: friend
	}
}