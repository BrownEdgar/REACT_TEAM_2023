import { createStore, combineReducers, applyMiddleware } from "redux";
import { arrReduser, initialArrValue } from "./features/arr";
import { initialSerialsValue, serialsReduser } from "./features/serials";

const initialState = {
	serials: initialSerialsValue,
	arr: initialArrValue,
}

const friendMiddleWare = (store) => (next) => (action) => {
	if (action.type === "ADD_FRIEND") {
		action.payload.date = new Date()
	}
	return next(action)
}

const store = createStore(combineReducers({
	serials: serialsReduser,
	arr: arrReduser,
}), initialState, applyMiddleware(friendMiddleWare));

export default store



// function createReduser(state, action) {
// 	if (action.type === CHANGE_NAME) {
// 		return { ...state, name: "React-Redux" }
// 	}
// 	if (action.type === CHANGE_COUNT) {
// 		return { ...state, count: 3 }
// 	}
// 	if (action.type === ADD_ELEMENT) {
// 		return { ...state, arr: [...state.arr,"d"]}
// 	}
// 	return state
// }
