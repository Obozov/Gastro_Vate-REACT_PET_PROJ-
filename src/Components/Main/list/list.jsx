import c from "./list.module.css"
import Restaurant from "./restaurant/restaurant";




const List = (props) => {










	return (
		<main className="list" >
			<Restaurant restaurantsData={props.restaurantsData} />
		</main>
	)
}


export default List;