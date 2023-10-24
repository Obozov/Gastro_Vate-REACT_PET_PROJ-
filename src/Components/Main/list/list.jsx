import Restaurant from "./restaurant/restaurant";




const List = (props) => {

	return (
		<main className="list" >
			<Restaurant reviewData={props.reviewData} restsData={props.restsData} />
		</main>
	)
}


export default List;