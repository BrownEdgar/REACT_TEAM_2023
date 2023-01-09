import { createStore } from "redux";
import { CHANGE_COUNT, CHANGE_NAME, ADD_ELEMENT } from "./actionTypes";

const initialState = {
	name: "Redux",
	count: 2,
	arr:["a","b",'c']
}

function createReduser(state, action) {
	if (action.type === CHANGE_NAME) {
		return { ...state, name: "React-Redux" }
	}
	if (action.type === CHANGE_COUNT) {
		return { ...state, count: 3 }
	}
	if (action.type === ADD_ELEMENT) {
		return { ...state, arr: [...state.arr,"d"]}
	}
	return state
}

const store = createStore(createReduser, initialState);

export default store