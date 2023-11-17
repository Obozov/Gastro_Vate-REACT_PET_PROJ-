import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC } from "../../../redux/users-reducer";



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

export default connect(mapStateToProps, mapDispatchToProps)(Users);