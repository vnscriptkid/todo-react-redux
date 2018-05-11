import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { createStore } from 'redux';
import reducer from './reducer';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import FilterLink from './FilterLink';

const store = createStore(reducer);
window.store = store;

store.subscribe(() => {
	console.log('state tree changed', store.getState());
})

// const Link = ({ children, onClick, active }) => (
// 	active ? 
// 	<span style={{ color: 'red' }}>{children}</span>
// 	:
// 	<a onClick={onClick} 
// 		href="#">
// 		{children}
// 	</a>
// )

// class FilterLink extends Component {
// 	componentDidMount() {
// 		const store = this.context.store;
// 		this.unsubscribe = store.subscribe(() => {
// 			this.forceUpdate();
// 			console.log('++ force update FilterLink')
// 		})
// 	}

// 	componentWillUnmount() {
// 		this.unsubscribe();
// 		console.log('-- unmount FilterLink')
// 	}

// 	render() {
// 		let store = this.context.store;
// 		let state = store.getState();
// 		let props = this.props;
// 		return (
// 			<Link 
// 				active={state.filter === props.filter }
// 				onClick={ () => store.dispatch({ type: 'SET_FILTER', filter: props.filter }) }
// 			>
// 			{props.children}
// 			</Link>
// 		)
// 	}
// }

// FilterLink.contextTypes = {
// 	store: PropTypes.object
// }

const Footer = () => {
	return (
		<div>
			<FilterLink filter="all">Show All</FilterLink>
			<FilterLink filter="done">DONE</FilterLink>
			<FilterLink filter="active">Active</FilterLink>
		</div>
	)
}


// const todoFilter = (filter, todos) => {
// 	if (filter === 'all') {
// 		return todos;
// 	} else if (filter === 'done') {
// 		return todos.filter(todo => todo.isDone)
// 	} else if (filter === 'active') {
// 		return todos.filter(todo => !todo.isDone)
// 	}
// }

// const Todo = ({ todo, isDone, onClick }) => (
// 	<li style={{ textDecoration: isDone ? 'line-through' : 'none' }} onClick={onClick}>
// 		{todo}
// 	</li>
// )

// const TodoList = ({ todos, onTodoClick }) => (
// 	<ul>
// 		{
// 			todos.map(todo => <Todo key={todo.id} onClick={() => onTodoClick(todo.id)} {...todo}/>)
// 		}
// 	</ul>
// )

// class TodoListContainer extends Component {
// 	componentDidMount() {
// 		const store = this.context.store;
// 		this.unsubscribe = store.subscribe(() => {
// 			this.forceUpdate();
// 			console.log('++ force update TodoList')
// 		})
// 	}

// 	componentWillUnmount() {
// 		this.unsubscribe();
// 		console.log('-- unmount TodoList');
// 	}

// 	render() {
// 		let store = this.context.store;
// 		let state = store.getState();
// 		let { filter, todos } = state;
// 		let props = this.props;
// 		return (
// 			<TodoList 
// 				todos={todoFilter(filter, todos)} 
// 				onTodoClick={(id) => store.dispatch({ type: 'TOGGLE_TODO', id: id  })} 
// 			/>
// 		)
// 	}
// }

// TodoListContainer.contextTypes = {
// 	store: PropTypes.object
// }

// const AddTodo = (props, context) => {
// 	let input = '';
// 	return (
// 		<form 
// 			onSubmit={(e) => { 
// 					e.preventDefault(); 
// 					context.store.dispatch({ id: id++, type: 'ADD_TODO', todo: input.value}); 
// 					input.value = '';
// 				}
// 			}
// 		>
// 			<input ref={node => { input = node }} />
// 			<button>Add Todo</button>
// 		</form>
// 	)
// }

// AddTodo.contextTypes = {
// 	store: PropTypes.object
// }

const TodoApp = () => (
	<div>
		<div>TODO APP</div>

		<AddTodo />

		<Footer />
	
		<TodoList />
	</div>
)
	

TodoApp.contextTypes = {
	store: PropTypes.object
}

// class Provider extends Component {

// 	getChildContext() {
// 		return {
// 			store: this.props.store
// 		}
// 	}
// 	render() {
// 		return this.props.children;
// 	}
// }

// Provider.childContextTypes = {
// 	store: PropTypes.object
// }

ReactDOM.render(
	<Provider store={store}><TodoApp /></Provider>, 
	document.getElementById('app')
);	


// import App from './App';

// ReactDOM.render(<App />, document.getElementById('app'));
