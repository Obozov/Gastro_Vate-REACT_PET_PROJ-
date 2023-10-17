import c from "./list.module.css"
import Restaurant from "./restaurant/restaurant";




const List = (props) => {
	return (
		<main className="list" >
			<Restaurant restsData={props.restsData} />
		</main>
	)
}


export default List;