import styles from "./Users.module.css"


let Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				userId: 1, photoUrl: 'https://cdn.iz.ru/sites/default/files/styles/420x480/public/tag-2022-06/Putin%201_4.jpg?itok=B-z9pZfY',
				followed: true, userName: "John", status: 'Cool site!', location: { city: 'Minsk', country: 'Belarus' }
			},
			{
				userId: 2, photoUrl: 'https://cdn.iz.ru/sites/default/files/styles/420x480/public/tag-2022-06/Putin%201_4.jpg?itok=B-z9pZfY',
				followed: true, userName: "Larisa", status: 'Not bad', location: { city: 'Moscow>', country: 'Russia' }
			},
			{
				userId: 3, photoUrl: 'https://cdn.iz.ru/sites/default/files/styles/420x480/public/tag-2022-06/Putin%201_4.jpg?itok=B-z9pZfY',
				followed: false, userName: "Pitr", status: 'I feel good', location: { city: 'Kiev', country: 'Ukraine' }
			},
			{
				userId: 4, photoUrl: 'https://cdn.iz.ru/sites/default/files/styles/420x480/public/tag-2022-06/Putin%201_4.jpg?itok=B-z9pZfY',
				followed: true, userName: "Laura", status: 'Crazy week XD', location: { city: 'Charkov', country: 'Ukraine' }
			},

		])
	}

	return <>
		{props.users.map(u => <div key={u.userId}>

			<span>
				<div>
					<img className={styles.userPhoto} src={u.photoUrl} alt="" />
				</div>
				<div>
					{u.followed
						? <button onClick={() => { props.unfollow(u.userId) }}>Unfollow</button>
						: <button onClick={() => { props.follow(u.userId) }}>Follow</button>}
				</div>
			</span>
			<span>
				<span>
					<div>{u.userName}</div><div>{u.status}</div>
				</span>
				<span>
					<div>{u.location.country}</div>
					<div>{u.location.city}</div>
				</span>
			</span>

		</div>)}
	</>
}

export default Users;

