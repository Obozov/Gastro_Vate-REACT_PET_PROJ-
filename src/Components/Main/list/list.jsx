import Restaurant from "./restaurant/restaurant";




const List = (props) => {

	return (
		<main className="list" >
			<Restaurant store={props.store} />
		</main>
	)
}


export default List;