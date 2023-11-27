import React from 'react';
import Profile from './profile';
import axios from 'axios';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => {
				// this.props.setUserProfile(response.data);
			});
	}

	render() {
		return <Profile {...this.props} />
	}


}

let mapStateToProps=(state)=>{
	
}

export default connect(mapStateToProps,{}) (ProfileContainer);






