import React from 'react';
import c from './commerce.module.css'
import { addRestActionCreator } from '../../../redux/rests-reducer';
import { updateNewRestTextActionCreator } from '../../../redux/rests-reducer';

const Commerce = (props) => {

	let newRestElement = React.createRef();

	let addRest = () => {
		props.dispatch(addRestActionCreator());
	}

	let onRestChange = () => {

		let text = newRestElement.current.value;
		let action = updateNewRestTextActionCreator(text);
		props.dispatch(action);

	}

	return <div className={c.commerce}>
		<h1 className={c.title}>For Commerce</h1>
		<div className={c.addrestaurant}>

			<p>Enter your name</p>
			<textarea
				onChange={onRestChange}
				ref={newRestElement}
				value={props.newRestText} />


			<button
				onClick={addRest}
				className={c.btn}
			>add your restaurant</button>

		</div>
	</div>

}


export default Commerce;