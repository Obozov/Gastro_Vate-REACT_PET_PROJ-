import { combineReducers, legacy_createStore as createStore } from "redux"
import restReducer from "./rests-reducer";
import reviewReducer from "./review-reducer";

let reducers = combineReducers({
	restsState: restReducer,
	reviewState: reviewReducer
});

let store = createStore(reducers);



export default store;