const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
	users: [
		// {
		// 	userId: 1, photoUrl: 'https://cdn.iz.ru/sites/default/files/styles/420x480/public/tag-2022-06/Putin%201_4.jpg?itok=B-z9pZfY',
		// 	followed: true, userName: "John", status: 'Cool site!', location: { city: 'Minsk', country: 'Belarus' }
		// },
		// {
		// 	userId: 2, photoUrl: 'https://cdn.iz.ru/sites/default/files/styles/420x480/public/tag-2022-06/Putin%201_4.jpg?itok=B-z9pZfY',
		// 	followed: true, userName: "Larisa", status: 'Not bad', location: { city: 'Moscow>', country: 'Russia' }
		// },
		// {
		// 	userId: 3, photoUrl: 'https://cdn.iz.ru/sites/default/files/styles/420x480/public/tag-2022-06/Putin%201_4.jpg?itok=B-z9pZfY',
		// 	followed: false, userName: "Pitr", status: 'I feel good', location: { city: 'Kiev', country: 'Ukraine' }
		// },
		// {
		// 	userId: 4, photoUrl: 'https://cdn.iz.ru/sites/default/files/styles/420x480/public/tag-2022-06/Putin%201_4.jpg?itok=B-z9pZfY',
		// 	followed: true, userName: "Laura", status: 'Crazy week XD', location: { city: 'Charkov', country: 'Ukraine' }
		// },

	],
	newReviewBody: "",
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.id) {
						return { ...u, followed: true };
					}
					return u;
				})
			}
		}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.id) {
						return { ...u, followed: false };
					}
					return u;
				})
			}
		case SET_USERS:
			return { ...state, users: [...state.users, ...action.users] }
		default:
			return state;
	}



}

export const followAC = (id) => ({ type: FOLLOW, id })
export const unfollowAC = (id) => ({ type: UNFOLLOW, id })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


export default usersReducer;



