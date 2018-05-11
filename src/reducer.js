import { combineReducers } from 'redux';

const todo = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return { id: action.id, todo: action.todo, isDone: false }
			break;
		case 'TOGGLE_TODO':
			return  state.id === action.id ? Object.assign({}, state, {isDone: !state.isDone}) : state			
			break;
		default: 
			return state;
	}
}

const todosReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, todo(undefined, action)];
			break;
		case 'TOGGLE_TODO':
			return state.map(item => todo(item, action))
			break;
		case 'REMOVE_TODO':
			return state.filter(item => item.id !== action.id)
			break;
		default: 
			return state;
	}
}

const filterReducer = (state = 'all', action) => {
	switch (action.type) {
		case 'SET_FILTER':
			return action.filter
			break;
		default:
			return state;
	}
}

const combineReducersCustom = (reducerObject) => {
	return (state = {}, action) => {
		return Object.keys(reducerObject).reduce((acc, key) => {
			acc[key] = reducerObject[key](state[key], action)
			return acc;
		}, {})
	}
}

const todoApp = combineReducers({
	todos: todosReducer,
	filter: filterReducer
})


// const todoApp = (state = {}, action) => {
// 	return {
// 		todos: todosReducer(state.todos, action),
// 		filter: filterReducer(state.filter, action)
// 	}
// }



export default todoApp;

export { todosReducer }