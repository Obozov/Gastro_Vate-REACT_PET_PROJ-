import { NavLink } from 'react-router-dom'
import c from '../list.module.css'








const RestItem = (props) => {
	let newReviewBody = props.store._state.reviewState.newReviewBody;
	let path = '/list/' + props.id;
	let status = props.status ? "Open" : "Close";

	let onSendReviewClick = () => {
		props.store.dispatch(onSendReviewClick());
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
			<div><textarea onChange={onNewReviewChange} value={newReviewBody} placeholder='Enter ur review'></textarea></div>
			<div><button onClick={onSendReviewClick}>Send</button></div>
		</div>

	</div>
}


export default RestItem;