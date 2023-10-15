import h from './Header.module.css';
import Burger from './burger/burger';
import Hot from './hot/hot';

const Header = (props) => {


	
	return (
		<div className={h.header}>
			<div className={h.header__row}>
				<div className={h.header_logo}>


				</div>

				<Hot hotRestaurant={props.hotRestaurant} />

				<Burger />

			</div>
		</div>
	)
}


export default Header;