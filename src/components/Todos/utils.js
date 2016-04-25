
export const todoCompletedStyle = (bool) =>(
  bool
    ? {color: 'white', background: '#25a74e'}
    : {color: 'white', background: '#d42526'}
);

export const getTodoId = (todos) =>(
  todos.reduce((max, x) => Math.max(x.id, max), -1) +1
);