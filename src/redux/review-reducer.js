const UPDATE_NEW_REVIEW_BODY = 'UPDATE-NEW-REVIEW-BODY';
const SEND_REVIEW = 'SEND-REVIEW';

let initialState = {
	reviewData: [
		{ id: 1, userId: 1, userName: "John", text: "Cool" },
		{ id: 2, userId: 2, userName: "Wiktoria", text: "GOOOD!" },
		{ id: 3, userId: 3, userName: "Lau", text: "Not bad" },
		{ id: 4, userId: 4, userName: "Grzegorz", text: "Tasty" },
		{ id: 5, userId: 5, userName: "Sasha", text: "Too expensive" },
	],
	newReviewBody: "",
}

const reviewReducer = (state = initialState, action) => {

	switch (action.type) {
		case UPDATE_NEW_REVIEW_BODY:
			state.newReviewBody = action.body;


			return state;
		case SEND_REVIEW:
			let body = state.newReviewBody
			state.newReviewBody = '';
			state.reviewData.push({ id: 5, userId: 6, userName: "Lau", text: body },);

			return state;

		default:
			return state;
	}



}

export const SendReviewCreator = () => ({ type: SEND_REVIEW })

export const updateNewReviewBodyCreator = (body) =>
	({ type: UPDATE_NEW_REVIEW_BODY, body: body })




export default reviewReducer;