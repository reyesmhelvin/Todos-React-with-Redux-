import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import {updateCurrent} from './reducers/todo';
import {bindActionCreators} from 'redux';

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

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators({updateCurrent}, dispatch)
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp;