import React from 'react';
import { addRestActionCreator } from '../../../redux/rests-reducer';
import { updateNewRestTextActionCreator } from '../../../redux/rests-reducer';
import Commerce from './commerce';

const CommerceContainer = (props) => {
	let state = props.store.getState();

	let addRest = () => {
		props.store.dispatch(addRestActionCreator());
	}

	let onRestChange = (text) => {
		let action = updateNewRestTextActionCreator(text);
		props.store.dispatch(action)
	}


	return <Commerce
		newRestText={state.restsState.newRestText}
		updateNewRestText={onRestChange}
		addRest={addRest} />
}


export default CommerceContainer;