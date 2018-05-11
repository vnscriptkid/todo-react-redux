let id = 0;

export const addTodo = (text) => ({ 
	id: id++, 
	type: 'ADD_TODO', 
	todo: text
})

export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
})

export const setFilter = (filter) => ({
	type: 'SET_FILTER',
	filter
})
