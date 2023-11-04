import { SendReviewCreator, updateNewReviewBodyCreator } from '../../../../redux/review-reducer';
import Restaurant from './restaurant';

//dialogs
const RestaurantContainer = (props) => { // в пропасах стор!


	let state = props.store.getState();

	let onSendReviewClick = () => {
		props.store.dispatch(SendReviewCreator());
	}

	let onNewReviewChange = (e) => {
			
		let body = e.target.value;
		props.store.dispatch(updateNewReviewBodyCreator(body));
	}


	
	return <Restaurant state={state} onNewReviewChange={onNewReviewChange} onSendReviewClick={onSendReviewClick} />
}



export default RestaurantContainer;