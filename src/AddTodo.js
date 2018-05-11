import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actionCreators';

const AddTodo = ({ dispatch }) => {
	let input = '';
	return (
		<form 
			onSubmit={(e) => { 
					e.preventDefault(); 
					dispatch(addTodo(input.value)); 
					input.value = '';
				}
			}
		>
			<input ref={node => { input = node }} />
			<button>Add Todo</button>
		</form>
	)
}

export default connect()(AddTodo)