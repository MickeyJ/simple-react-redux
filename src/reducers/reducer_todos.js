import { 
  GET_TODOS, 
  ADD_TODO, 
  DELETE_TODO,
  COMPLETE_TODO
} from '../actions/index'

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
    case COMPLETE_TODO:
      return { ...state,
        all: state.all.map( todo =>(
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete}
            : todo
        ))
      };
    default:
      return state
  }
}
