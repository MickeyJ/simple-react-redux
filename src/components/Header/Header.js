import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getTodos } from '../../actions/index'

class Header extends Component{
  componentWillMount(){
    this.props.getTodos();
  }
  render(){
    require('./header.scss');
    return(
      <header>
        <h1>Redux TODO</h1>
        <span>TODO Count: </span>
        <span id="todo-count">
          {this.props.todos.length}
        </span>
      </header>
    )
  }
}

function mapStateToProps(state){
  return { todos: state.todos.all}
}

export default connect(mapStateToProps, { getTodos })(Header);
