import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow } from "../../../redux/users-reducer";
import axios from "axios"
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";

class UsersContainer extends React.Component {



	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = (pageNubmer) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(pageNubmer)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNubmer}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
			});


	}

	render() {

		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				toggleIsFetching={this.props.toggleIsFetching}
			/>
		</>
	}
}


let mapStateToProps = (state) => {
	return {
		users: state.usersState.users,
		pageSize: state.usersState.pageSize,
		totalUsersCount: state.usersState.totalUsersCount,
		currentPage: state.usersState.currentPage,
		isFetching: state.usersState.isFetching,

	}
}


export default connect(mapStateToProps, {
	follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer);