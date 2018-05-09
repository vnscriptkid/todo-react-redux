import todoReducer from './reducer';

test('test ADD_TODO', () => {
  let prevState = [];
  let action = {type: 'ADD_TODO', id: 0, todo: 'sth important'};
  let afterState = [{id: 0, todo: 'sth important', isDone: false}];

  let result = todoReducer(prevState, action);
  expect(result).toMatchObject(afterState);

});