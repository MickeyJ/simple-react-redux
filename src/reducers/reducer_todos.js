import { GET_TODOS, ADD_TODO, DELETE_TODO } from '../actions/index'

const INITIAL_STATE = { all: [] }; 

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    
    case GET_TODOS:
      return { ...state,
        all: action.payload
      };
    case ADD_TODO:
      return { ...state,
        all: [action.payload, ...state.all]
      };
    case DELETE_TODO:
      return { ...state,
        all: state.all.filter(todo => (
          todo.id !== action.payload
        ))
      };
    default:
      return state
  }
}