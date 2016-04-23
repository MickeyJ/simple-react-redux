import React from 'react'

const TodoList = props => (
  <table> 
    <tbody>
      <tr>
        <th>ID</th>
        <th>Task</th>
        <th>Completed</th>
        <td> </td>
      </tr>
      {props.todos.map((x, i) =>(
        <tr key={i}>
          <td>{x.id}</td>
          <td>{x.task}</td>
          <td>
            <button onClick={() => props.handleComplete (x.id)}>
              {x.complete.toString()}
            </button>
          </td>
          <td>
            <button onClick={() => props.handleDelete (x.id)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default TodoList