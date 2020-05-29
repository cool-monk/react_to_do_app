import { ADD_TODOS } from './toDoTypes';

const initialState = {
  todoList: [],
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS: {
      console.log(action.payload);
      return {
        ...state,
        todoList: state.todoList.concat(action.payload),
      };
    }

    default: {
      return state;
    }
  }
};

export default toDoReducer;
