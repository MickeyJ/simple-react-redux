import React from 'react'

const TodoList = props => {
  return (
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
            <td>{x.complete.toString()}</td>
            <td>
              <button onClick={() => props.handleDelete (x.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};
export default TodoList