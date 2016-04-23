import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getTodos, addTodo } from '../../actions/'

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
      task: this.todo.value,
      complete: false
    });
    this.todo.value = '';
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
        <ul className="ten columns">
          {this.props.todos.map((x, i) =>(
            <li key={i}>{x.task}</li>
          ))}
        </ul>
      </main>
    )
  }
}

function mapStateToProps(state){
  return { todos: state.todos.all}
}

export default connect(mapStateToProps, { getTodos, addTodo })(TodoComponent);
