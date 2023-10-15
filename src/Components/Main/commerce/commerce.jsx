import React from 'react';
import c from './commerce.module.css'



const Commerce = () => {

	let newRestaurantElement = React.createRef();

	let addRestaurant = () => {
		let text = newRestaurantElement.current.value;
		alert(text);
	}


	return <div className={c.commerce}>
		<h1 className={c.title}>For Commerce</h1>
		<div className={c.addrestaurant}>

			<p>Enter your name</p>
			<textarea ref={newRestaurantElement}></textarea>


			<button onClick={addRestaurant} className={c.btn}>add your restaurant</button>

		</div>
	</div>

}


export default Commerce;