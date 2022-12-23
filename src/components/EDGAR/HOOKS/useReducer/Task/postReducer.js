import { FETCHING_FAILURE, FETCHING_START, FETCHING_SUCCESS } from "./actionTypes"

export const initialState = {
	post: {},
	loading: false,
	error: false
}

export const postReducer = (state, action) => {
	switch (action.type) {
			case FETCHING_START:
			return {
				...state,
				loading: true,
			}
		case FETCHING_SUCCESS:
			return {
				...state,
				post: action.payload,
				loading: false,
			}
		case FETCHING_FAILURE:
			return {
				post: {},
				loading: false,
				error: true
			}	
			default: return state
		}
}