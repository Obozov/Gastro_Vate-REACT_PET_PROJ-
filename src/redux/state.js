let rerenderEntireTree = () => {
	console.log('state change');

}

let state = {
	restsData: [
		{ id: 1, name: "Clode Mone", status: false, time: 10, foto: "url" },
		{ id: 2, name: "Gendelyk", status: true, time: 0, foto: "url" },
		{ id: 3, name: "PatoPizza", status: false, time: 30, foto: "url" },
		{ id: 4, name: "FriluaRes", status: false, time: 50, foto: "url" },
		{ id: 5, name: "Salva do Rali", status: true, time: 0, foto: "url" },
	],
	newRestText: 'it-c'
	,
	hotRest: { id: 1, name: "Clode Mone", status: false, time: 10, foto: "url" }

}

export const addRest = () => {
	let newRest = {
		id: 6,
		name: state.newRestText,
		status: false,
		time: 5,
		foto: "url"
	}

	state.restsData.push(newRest);
	state.newRestText = '';
	rerenderEntireTree(state);
}
export const updateNewRestText = (newText) => {
	state.newRestText = newText;
	rerenderEntireTree(state);

}

export const subscribet = (observer) => {
	rerenderEntireTree = observer;
}

export default state;