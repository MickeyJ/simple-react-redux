import React, { Component } from 'react'

import { connect } from 'react-redux'
import { 
  getTodos, 
  addTodo, 
  deleteTodo,
  completeTodo
} from '../../actions/'

import TodoList from './TodoList'


const setTodoId = (todos)  =>(
  todos.reduce((max, x) => Math.max(x.id, max), -1) +1
);

class TodoComponent extends Component{
  componentWillMount(){
    this.props.getTodos();
  }
  setTodoText(ref){
    this.todo = ref
  }
  handleAddTodo(e){
    e.preventDefault();
    if(!this.todo.value) return;
    this.props.addTodo({
      id: setTodoId(this.props.todos),
      task: this.todo.value,
      complete: false
    });
    this.todo.value = '';
  }
  handleDelete(todo_id) {
    this.props.deleteTodo(todo_id);
  }
  handleComplete(todo_id) {
    this.props.completeTodo(todo_id)
  }
  render(){
    require('./todos.scss');
    return(
      <main id="todo-component" className="row">
        <form className="row" onSubmit={(e) => this.handleAddTodo(e)} >
          <input
            type="text"
            placeholder="Your Todo"
            className="three columns"
            ref={(ref) => this.setTodoText(ref)}
          />
          <button className="two columns button-primary" type="submit">
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
  getTodos, addTodo, deleteTodo, completeTodo 
})(TodoComponent);
