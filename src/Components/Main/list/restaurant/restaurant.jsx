import c from './restaurant.module.css'
import { NavLink } from 'react-router-dom'

const Restaurant = (props) => {



const RestItem = (props) => {
	let path = '/list/' + props.id;
	let status=props.status?"Open":"Close";
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

let restsElements = props.restsData.map(r => <RestItem status={r.status} time={r.time} name={r.name} id={r.id} />)


	return (
		<div className="restaurant">
			{restsElements}
		</div>
	)
}

export default Restaurant;