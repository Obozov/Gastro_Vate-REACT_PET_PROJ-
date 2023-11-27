import { addRestActionCreator, updateNewRestTextActionCreator } from '../../../../redux/rests-reducer';
import { connect } from 'react-redux';
import Commerce from './commerce';

// const CommerceContainer = (props) => {



// 	return <StoreContext.Consumer>{
// 		(store) => {
// 			let state = store.getState();

// 			let addRest = () => {
// 				store.dispatch(addRestActionCreator());
// 			}

// 			let onRestChange = (text) => {
// 				let action = updateNewRestTextActionCreator(text);
// 				store.dispatch(action)
// 			}
// 			return (
// 				<Commerce
// 					newRestText={state.restsState.newRestText}
// 					updateNewRestText={onRestChange}
// 					addRest={addRest} />)
// 		}}
// 	</StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
	return {
		newRestText: state.restsState.newRestText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addRest: () => {
			dispatch(addRestActionCreator());
		},
		onRestChange: (text) => {
			dispatch(updateNewRestTextActionCreator(text))
		}
	}
}

const CommerceContainer = connect(mapStateToProps, mapDispatchToProps)(Commerce);

export default CommerceContainer;
