import axios from "axios"
import React from "react";
import styles from "./Users.module.css"
import userPhoto from '../../../assets/images/user.png';

class Users extends React.Component {



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
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);

		}
		return <>
			<div>
				{pages.map(p => {

					return <span className={(this.props.currentPage === p && styles.selectedPage) || styles.page}
						onClick={(e) => { this.onPageChanged(p) }} > {p} </span>
				})}

			</div >
			{
				this.props.users.map(u => <div key={u.id}>

					<span>
						<div>
							<img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt="ava" />
						</div>
						<div>
							{u.followed
								? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
								: <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div><div>{u.status}</div>
						</span>
						<span>
							<div>{"u.location.country"}</div>
							<div>{"u.location.city"}</div>
						</span>
					</span>

				</div>)
			}
		</>
	}
}
export default Users;

