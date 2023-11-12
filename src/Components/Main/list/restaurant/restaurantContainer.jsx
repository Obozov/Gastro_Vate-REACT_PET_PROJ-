import { connect } from 'react-redux';
import { SendReviewCreator, updateNewReviewBodyCreator } from '../../../../redux/review-reducer';
import Restaurant from './restaurant';

//dialogs
// const RestaurantContainer = (props) => { // в пропасах стор!


// 	return <StoreContext.Consumer>{
// 		(store) => {
// 			let state = store.getState();

// 			let onSendReviewClick = () => {
// 				store.dispatch(SendReviewCreator());
// 			}

// 			let onNewReviewChange = (e) => {

// 				let body = e.target.value;
// 				store.dispatch(updateNewReviewBodyCreator(body));
// 			}
// 			return <Restaurant state={state} onNewReviewChange={onNewReviewChange} onSendReviewClick={onSendReviewClick} />
// 		}}

// 	</StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
	return {
		state: state
	}
}


let mapDispatchToProps = (dispatch) => {

	return {
		onSendReviewClick: () => {
			dispatch(SendReviewCreator());
		},
		onNewReviewChange: (body) => {
			dispatch(updateNewReviewBodyCreator(body));
		}
	}
}
const RestaurantContainer = connect(mapStateToProps, mapDispatchToProps)(Restaurant);

export default RestaurantContainer;


