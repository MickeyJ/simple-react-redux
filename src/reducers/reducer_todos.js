import { GET_TODOS, ADD_TODO } from '../actions/index'

const INITIAL_STATE = { all: [] }; 

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    
    case GET_TODOS:
      return { ...state, all: action.payload };

    case ADD_TODO:
      console.log(state);
      return { ...state, all: [action.payload, ...state.all] };
    
    default:
      return state
  }
}