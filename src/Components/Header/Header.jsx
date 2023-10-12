import h from './Header.module.css';
import Burger from './burger/burger';

const Header = () => {
	return (
		<div className={h.header}>
			<div className={h.header__row}>
				<div className={h.header_logo}>
					{/* <img src="../../logo.jpg" alt=""></img> */}
					logo
				</div>
				<Burger/>
			</div>
		</div>
	)
}


export default Header;