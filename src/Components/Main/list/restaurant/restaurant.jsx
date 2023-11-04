import { updateNewReviewBodyCreator } from '../../../../redux/review-reducer';
import { SendReviewCreator } from '../../../../redux/review-reducer';
import c from './restaurant.module.css'
import { NavLink } from 'react-router-dom'


//dialogs
const Restaurant = (props) => {

	
	let state = props.store.getState();
	let newReviewBody = state.reviewState.newReviewBody;

	const RestItem = (props) => {

		let path = '/list/' + props.id;
		let status = props.status ? "Open" : "Close";

		let onSendReviewClick = () => {
			props.store.dispatch(SendReviewCreator());
		}
		let onNewReviewChange = (e) => {
			
			let body = e.target.value;
			props.store.dispatch(updateNewReviewBodyCreator(body));
		}



		return <div className={c.restaurant}>
			<div >
				<NavLink className={c.name} to={path}>{props.name}</NavLink>
			</div>
			<div className={c.status}>
				status:{status}
			</div>
			<div className={c.time}>
				waiting time: ~<span>{props.time}</span> min.
			</div>


			<div className={c.send_review}>
				<div ><textarea onChange={onNewReviewChange} value={newReviewBody} placeholder='Enter ur review'></textarea></div>
				<div><button onClick={onSendReviewClick}>Send</button></div>
			</div>

		</div>
	}

	const ReviewItem = (props) => {
		let path = '/list/user/' + props.userId;
		return <div className={c.review}>
			<NavLink className={c.user_name} to={path}>{props.userName}</NavLink>
			<p className={c.review_to}>Review to {<NavLink to={path}>{props.id}</NavLink>}</p>
			<p className={c.review_text}>{props.text}</p>
		</div>

	}



	let restsElements = state.restsState.restsData.map(r => <RestItem store={props.store} state={props.state} status={r.status} time={r.time} name={r.name} id={r.id} />)
	let reviewsElements = state.reviewState.reviewData.map(r => <ReviewItem  userName={r.userName} userId={r.userId} id={r.id} text={r.text} />)

	return (
		<div className={c.list}>
			<div className={c.list__row}>
				<div className={c.rest_list}>
					<div>{restsElements}</div>
					<div>

					</div>
				</div>
				<div className={c.review_list}>
					{reviewsElements}
				</div>
			</div>
		</div>
	)
}

export default Restaurant;