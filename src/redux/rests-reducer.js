const ADD_REST = 'ADD-REST';
const UPDATE_NEW_REST_TEXT = 'UPDATE-NEW-REST-TEXT';

let initialState = {
	restsData: [
		{ id: 1, name: "Clode Mone", status: false, time: 10, foto: "url" },
		{ id: 2, name: "Gendelyk", status: true, time: 0, foto: "url" },
		{ id: 3, name: "PatoPizza", status: false, time: 30, foto: "url" },
		{ id: 4, name: "FriluaRes", status: false, time: 50, foto: "url" },
		{ id: 5, name: "Salva do Rali", status: true, time: 0, foto: "url" },
	],
	newRestText: 'it-c',
	hotRest: { id: 1, name: "Clode Mone", status: false, time: 10, foto: "url" },
}

const restReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_REST: {
			let newRest = {
				id: 6,
				name: state.newRestText,
				status: false,
				time: 5,
				foto: "url"
			}
			return {
				...state,
				restsData: [...state.restsData, newRest],
				newRestText: ''
			};


		}
		case UPDATE_NEW_REST_TEXT: {
			return {
				...state,
				newRestText: action.newText
			};


		}
		default:
			return state;
	}


}
export const addRestActionCreator = () => ({ type: ADD_REST })

export const updateNewRestTextActionCreator = (text) =>
	({ type: UPDATE_NEW_REST_TEXT, newText: text })

export default restReducer;