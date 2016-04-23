
let todos = [
  {id: 4, task: 'cook', complete: false},
  {id: 3, task: 'clean', complete: false},
  {id: 2, task: 'eat', complete: false},
  {id: 1, task: 'sleep', complete: false}
];

export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO= 'ADD_TODO';
export const DELETE_TODO= 'DELETE_TODO';
export const COMPLETE_TODO= 'COMPLETE_TODO';

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

export function deleteTodo(todo_id){
  return{
    type: DELETE_TODO,
    payload: todo_id
  }
}

export function completeTodo(todo_id){
  return{
    type: COMPLETE_TODO,
    payload: todo_id
  }
}