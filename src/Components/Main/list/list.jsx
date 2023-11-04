
import Restauraunt from './restaurant/restaurant'
import RestaurantContainer from './restaurant/restaurantContainer';


const List = (props) => {

	return (
		<main className="list" >
			<RestaurantContainer store={props.store} />
		</main>
	)
}


export default List;