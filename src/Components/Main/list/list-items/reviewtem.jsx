import c from '../list.module.css'
import { NavLink } from 'react-router-dom';





const ReviewItem = (props) => {
	let path = '/list/user/' + props.userId;
	return <div className={c.review}>
		<NavLink className={c.user_name} to={path}>{props.userName}</NavLink>
		<p className={c.review_to}>Review to {<NavLink to={path}>{props.id}</NavLink>}</p>
		<p className={c.review_text}>{props.text}</p>
	</div>

}

export default ReviewItem;