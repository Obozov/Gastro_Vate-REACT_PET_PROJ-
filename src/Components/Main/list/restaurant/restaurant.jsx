import c from './restaurant.module.css'
import { NavLink } from 'react-router-dom'

const Restaurant = (props) => {



	const RestItem = (props) => {
		let path = '/list/' + props.id;
		let status = props.status ? "Open" : "Close";
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



	let restsElements = props.restsData.map(r => <RestItem status={r.status} time={r.time} name={r.name} id={r.id} />)
	let reviewsElements = props.reviewData.map(r => <ReviewItem userName={r.userName} userId={r.userId} id={r.id} text={r.text} />)

	return (
		<div className={c.list}>
			<div className={c.list__row}>
				<div className={c.rest_list}>'
					<div>{restsElements}</div>
					<div>
						<div><textarea placeholder='Enter ur message'></textarea></div>
						<div><button onClick={() => { }}>Send</button></div>
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