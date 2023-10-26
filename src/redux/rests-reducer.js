const ADD_REST = 'ADD-REST';
const UPDATE_NEW_REST_TEXT = 'UPDATE-NEW-REST-TEXT';


const restReducer = (state, action) => {
	switch (action.type) {
		case ADD_REST:
			let newRest = {
				id: 6,
				name: state.newRestText,
				status: false,
				time: 5,
				foto: "url"
			}
			state.restsData.push(newRest);
			state.newRestText = '';

			return state;
		case UPDATE_NEW_REST_TEXT:
			state.newRestText = action.newText;
			return state;
			default: 
			return state;
	}


}
export const addRestActionCreator = () => ({ type: ADD_REST })

export const updateNewRestTextActionCreator = (text) =>
	({ type: UPDATE_NEW_REST_TEXT, newText: text })

export default restReducer;