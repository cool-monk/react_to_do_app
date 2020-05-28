import { combineReducers } from 'redux';
import toDoReducer from './toDo/toDoReducer';

const rootReducer = combineReducers({
  todos: toDoReducer,
});

export default rootReducer;
