import React from 'react';
import c from './commerce.module.css'

const Commerce = (props) => {

	let newRestElement = React.createRef();

	let onAddRest = () => {
		props.addRest();
		// props.dispatch(addRestActionCreator());
	}
	let onRestChange = () => {

		let text = newRestElement.current.value;
		props.onRestChange(text);   //Тут может быть был странный рефакторинг, поменял имя
		// let action = updateNewRestTextActionCreator(text);
		// props.dispatch(action);

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
				onClick={onAddRest}
				className={c.btn}
			>add your restaurant</button>

		</div>
	</div>

}


export default Commerce;