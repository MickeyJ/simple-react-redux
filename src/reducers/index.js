import { combineReducers } from 'redux'

import TodoReducer from './reducer_todos'

export default combineReducers({
  todos: TodoReducer
});
