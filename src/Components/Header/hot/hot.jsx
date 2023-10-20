import h from '../Header.module.css'
import { Link } from 'react-router-dom'


const Hot = (props) => {
	const path = "/list/" + props.hotRest.id;

	return (
		<div className={h.hotBlock}>
			<Link className={h.hotOffer} to={path}><span>Hot offer!</span>Clode Mone</Link>
		</div>
	)
}


export default Hot;