import { ADD_TODOS } from './toDoTypes';

const initialState = {
  todoList: [],
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...state,
        todoList: state.todoList.push(action.payload),
      };

    default: {
      return state;
    }
  }
};

export default toDoReducer;
