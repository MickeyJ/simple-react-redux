import React from 'react'
import { todoCompletedStyle } from './utils'

const TodoList = props => (
  <table className="table table-hover">
    <tbody>
      <tr>
        <th>ID</th>
        <th>Task</th>
        <th>Completed</th>
        <td> </td>
      </tr>
      {props.todos.map((x) =>(
        <tr key={x.id}>
          <td>{x.id}</td>
          <td className="todo-task">{x.task}</td>
          <td>
            <button
              onClick={() => props.handleComplete (x.id)}
              className="btn todo-complete"
              style={todoCompletedStyle(x.complete)}>
              <h5>{x.complete.toString()}</h5>
            </button>
          </td>
          <td>
            <button
              onClick={() => props.handleDelete (x.id)}
              className="btn todo-delete">
              <h5>X</h5>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default TodoList