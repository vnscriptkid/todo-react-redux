import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from './actionCreators';

const todoFilter = (filter, todos) => {
	if (filter === 'all') {
		return todos;
	} else if (filter === 'done') {
		return todos.filter(todo => todo.isDone)
	} else if (filter === 'active') {
		return todos.filter(todo => !todo.isDone)
	}
}

const Todo = ({ todo, isDone, onClick }) => (
	<li style={{ textDecoration: isDone ? 'line-through' : 'none' }} onClick={onClick}>
		{todo}
	</li>
)

const TodoList = ({ todos, onTodoClick }) => (
	<ul>
		{
			todos.map(todo => <Todo key={todo.id} onClick={() => onTodoClick(todo.id)} {...todo}/>)
		}
	</ul>
)

const mapStateToProps = (state) => {
	return {
		todos: todoFilter(state.filter, state.todos)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => dispatch(toggleTodo(id)) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);