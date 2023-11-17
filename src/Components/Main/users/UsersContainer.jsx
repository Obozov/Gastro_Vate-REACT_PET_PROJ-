import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC } from "../../../redux/users-reducer";
import axios from "axios"
import React from "react";
import Users from "./Users";

class UsersContainer extends React.Component {



	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount)
			});
	}

	onPageChanged = (pageNubmer) => {
		this.props.setCurrentPage(pageNubmer)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNubmer}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	}

	render() {

		return <Users
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			onPageChanged={this.onPageChanged}
			users={this.props.users}
			follow={this.props.follow}
			unfollow={this.props.unfollow}

		/>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersState.users,
		pageSize: state.usersState.pageSize,
		totalUsersCount: state.usersState.totalUsersCount,
		currentPage: state.usersState.currentPage,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (pageNubmer) => {
			dispatch(setCurrentPageAC(pageNubmer))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setUsersTotalCountAC(totalCount))
		}
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);