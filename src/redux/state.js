import restReducer from "./rests-reducer";
import reviewReducer from "./review-reducer";



let store = {
	_state: {
		restsState: {
			restsData: [
				{ id: 1, name: "Clode Mone", status: false, time: 10, foto: "url" },
				{ id: 2, name: "Gendelyk", status: true, time: 0, foto: "url" },
				{ id: 3, name: "PatoPizza", status: false, time: 30, foto: "url" },
				{ id: 4, name: "FriluaRes", status: false, time: 50, foto: "url" },
				{ id: 5, name: "Salva do Rali", status: true, time: 0, foto: "url" },
			],
			newRestText: 'it-c',
			hotRest: { id: 1, name: "Clode Mone", status: false, time: 10, foto: "url" },
		},
		reviewState: {
			reviewData: [
				{ id: 1, userId: 1, userName: "John", text: "Cool" },
				{ id: 2, userId: 2, userName: "Wiktoria", text: "GOOOD!" },
				{ id: 3, userId: 3, userName: "Lau", text: "Not bad" },
				{ id: 4, userId: 4, userName: "Grzegorz", text: "Tasty" },
				{ id: 5, userId: 5, userName: "Sasha", text: "Too expensive" },
			],
			newReviewBody: "",
		},
	},
	dispatch(action) {
		this._state.restsState = restReducer(this._state.restsState, action);
		this._state.reviewState = reviewReducer(this._state.reviewState, action);

		this._callSubscriber(this._state);

	},
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log('state change');

	},
	addRest() {
		let newRest = {
			id: 6,
			name: this._state.restsState.newRestText,
			status: false,
			time: 5,
			foto: "url"
		}

		this._state.restsState.restsData.push(newRest);
		this._state.restsState.newRestText = '';
		this._callSubscriber(this._state);
	},
	updateNewRestText(newText) {
		this._state.restsState.newRestText = newText;
		this._callSubscriber(this._state);

	},
	subscribe(observer) {
		this._callSubscriber = observer;
	}
}









window.store = store;
export default store;