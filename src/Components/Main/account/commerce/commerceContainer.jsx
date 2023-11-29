import { addRestActionCreator, updateNewRestTextActionCreator } from '../../../../redux/acc-reducer';
import { connect } from 'react-redux';
import Commerce from './commerce';

let mapStateToProps = (state) => {

	return {
		newRestText: state.accState.newRestText
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
