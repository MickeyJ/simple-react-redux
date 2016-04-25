import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  getTodos, 
  addTodo, 
  deleteTodo,
  completeTodo
} from '../../actions/'

import { getTodoId } from './utils'
import TodoList from './TodoList'



class TodoComponent extends Component{
  componentWillMount(){
    this.props.getTodos();
  }
  getInputText(ref){
    this.todo = ref
  }
  handleAddTodo(e){
    e.preventDefault();
    if(!this.todo.value) return;
    this.props.addTodo({
      id: getTodoId(this.props.todos),
      task: this.todo.value,
      complete: false
    });
    this.todo.value = '';
  }
  handleDelete(todo_id) {
    this.props.deleteTodo(todo_id);
  }
  handleComplete(todo_id) {
    this.props.completeTodo(todo_id);
  }
  render(){
    require('./todos.scss');
    return (
      <main id="todo-component">
        <form 
          className="form-inline todo-form" 
          onSubmit={(e) => this.handleAddTodo(e)}>
          <input
            type="text"
            placeholder="Your Todo"
            className="form-control"
            ref={(ref) => this.getInputText(ref)}
          />
          <button className="btn btn-info" type="submit">
            Add Todo
          </button>
        </form>
        <TodoList
          todos={this.props.todos}
          handleDelete={this.handleDelete.bind(this)}
          handleComplete={this.handleComplete.bind(this)}
        />
      </main>
    )
  }
}

function mapStateToProps(state){
  return { todos: state.todos.all}
}

export default connect(mapStateToProps, { 
  getTodos, 
  addTodo, 
  deleteTodo, 
  completeTodo 
})(TodoComponent);
