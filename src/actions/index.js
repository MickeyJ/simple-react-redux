
let todos = [
  {task: 'cook', complete: false},
  {task: 'clean', complete: false},
  {task: 'eat', complete: false},
  {task: 'sleep', complete: false}
];

export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO= 'ADD_TODO';

export function getTodos(){
  return{
    type: GET_TODOS,
    payload: todos
  };
}

export function addTodo(todo){
  return{
    type: ADD_TODO,
    payload: todo
  }
}
