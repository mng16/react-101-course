const initialState = {
	todoList: ["rand", "took", "fad", "cup"]
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_DO":
			return { ...state, todoList: [...state.todoList, action.value] };

		default:
			return state;
	}
};
