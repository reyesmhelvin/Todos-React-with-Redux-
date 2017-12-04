import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import {updateCurrent} from './reducers/todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todos</h1>
        </header>
        <div className="todo-app">
          <TodoForm 
          currentTodo={this.props.currentTodo}
          changeCurrent={this.props.updateCurrent}
          />
          <TodoList todos={this.props.todos}/>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => state, 
  {updateCurrent}
)(App)
