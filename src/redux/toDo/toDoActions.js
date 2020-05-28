import { ADD_TODOS } from './toDoTypes';

export const addTodos = (todo) => {
  return {
    type: ADD_TODOS,
    payload: todo,
  };
};
