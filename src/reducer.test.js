import { todosReducer } from './reducer';
const deepFreeze = require('deep-freeze');

test('test ADD_TODO', () => {
  let prevState = [];
  let action = {type: 'ADD_TODO', id: 0, todo: 'sth important'};
  deepFreeze(prevState);
  deepFreeze(action);
  let afterState = [{id: 0, todo: 'sth important', isDone: false}];

  let result = todosReducer(prevState, action);
  expect(result).toMatchObject(afterState);
});

test('test TOGGLE_TODO', () => {
	let prevState = [{id: 0, todo: 'sth important', isDone: false}];
	let action = {type: 'TOGGLE_TODO', id: 0};
	deepFreeze(prevState);
    deepFreeze(action);
	let afterState = [{id: 0, todo: 'sth important', isDone: true}];

	expect(todosReducer(prevState, action)).toMatchObject(afterState);
})

test('test REMOVE_TODO', () => {
	let prevState = [{id: 0, todo: 'sth important', isDone: false}];
	let action = {type: 'REMOVE_TODO', id: 0};
	deepFreeze(prevState);
	deepFreeze(action);
	let afterState = []; 

	expect(todosReducer(prevState, action)).toMatchObject(afterState);
})



