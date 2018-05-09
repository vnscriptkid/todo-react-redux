const todoReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [...state, { id: action.id, todo: action.todo, isDone: false }];
			break;
		default:
			return state;
	}
}

export default todoReducer;