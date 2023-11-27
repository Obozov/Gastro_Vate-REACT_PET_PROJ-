
let initialState = {
	restsData: [
		{ id: 1, name: "Clode Mone", status: false, time: 10, foto: "url" },
		{ id: 2, name: "Gendelyk", status: true, time: 0, foto: "url" },
		{ id: 3, name: "PatoPizza", status: false, time: 30, foto: "url" },
		{ id: 4, name: "FriluaRes", status: false, time: 50, foto: "url" },
		{ id: 5, name: "Salva do Rali", status: true, time: 0, foto: "url" },
	],
	}

const restReducer = (state = initialState, action) => {
	switch (action.type) {
		
		default:
			return state;
	}


}

export default restReducer;