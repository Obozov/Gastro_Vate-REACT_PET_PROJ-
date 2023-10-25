const ADD_REST = 'ADD-REST';
const UPDATE_NEW_REST_TEXT = 'UPDATE-NEW-REST-TEXT';
const UPDATE_NEW_REVIEW_BODY = 'UPDATE-NEW-REVIEW-BODY';
const SEND_REVIEW = 'SEND-REVIEW';

let store = {
	_state: {
		restsData: [
			{ id: 1, name: "Clode Mone", status: false, time: 10, foto: "url" },
			{ id: 2, name: "Gendelyk", status: true, time: 0, foto: "url" },
			{ id: 3, name: "PatoPizza", status: false, time: 30, foto: "url" },
			{ id: 4, name: "FriluaRes", status: false, time: 50, foto: "url" },
			{ id: 5, name: "Salva do Rali", status: true, time: 0, foto: "url" },
		],
		newRestText: 'it-c',
		reviewData: [
			{ id: 1, userId: 1, userName: "John", text: "Cool" },
			{ id: 2, userId: 2, userName: "Wiktoria", text: "GOOOD!" },
			{ id: 3, userId: 3, userName: "Lau", text: "Not bad" },
			{ id: 4, userId: 4, userName: "Grzegorz", text: "Tasty" },
			{ id: 5, userId: 5, userName: "Sasha", text: "Too expensive" },
		],
		newReviewBody: "",
		hotRest: { id: 1, name: "Clode Mone", status: false, time: 10, foto: "url" },
	},
	dispatch(action) {
		if (action.type === 'ADD-REST') {
			let newRest = {
				id: 6,
				name: this._state.newRestText,
				status: false,
				time: 5,
				foto: "url"
			}
			this._state.restsData.push(newRest);
			this._state.newRestText = '';
			this._callSubscriber(this._state);
		} else if (action.type === 'UPDATE-NEW-REST-TEXT') {
			this._state.newRestText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === 'UPDATE-NEW-REVIEW-BODY') {
			this._state.newReviewBody = action.body;
			this._callSubscriber(this._state);
		} else if (action.type === 'SEND-REVIEW') {
			let body = this._state.newReviewBody
			this._state.newReviewBody = '';
			this._state.reviewData.push({ id: 5, userId: 6, userName: "Lau", text: body },);
			this._callSubscriber(this._state);
		}
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
			name: this._state.newRestText,
			status: false,
			time: 5,
			foto: "url"
		}

		this._state.restsData.push(newRest);
		this._state.newRestText = '';
		this._callSubscriber(this._state);
	},
	updateNewRestText(newText) {
		this._state.newRestText = newText;
		this._callSubscriber(this._state);

	},
	subscribe(observer) {
		this._callSubscriber = observer;
	}
}
export const addRestActionCreator = () => ({ type: ADD_REST })

export const updateNewRestTextActionCreator = (text) =>
	({ type: UPDATE_NEW_REST_TEXT, newText: text })
export const SendReviewCreator = () => ({ type: SEND_REVIEW })

export const updateNewReviewBodyCreator = (body) =>
	({ type: UPDATE_NEW_REVIEW_BODY, body: body })








window.store = store;
export default store;