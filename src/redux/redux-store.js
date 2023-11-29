import { combineReducers, legacy_createStore as createStore } from "redux"
import accReducer from "./acc-reducer";
import reviewReducer from "./review-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
	accState: accReducer,
	reviewState: reviewReducer,
	usersState: usersReducer
});

let store = createStore(reducers);
window.store = store

export default store;