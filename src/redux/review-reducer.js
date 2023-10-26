const UPDATE_NEW_REVIEW_BODY = 'UPDATE-NEW-REVIEW-BODY';
const SEND_REVIEW = 'SEND-REVIEW';


const reviewReducer = (state, action) => {

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