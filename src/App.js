import React, { Component } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Message from "./components/Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todos</h1>
        </header>
        <div className="todo-app">
          <Message message="mhelvin reyes"/>
          <TodoForm/>
          <TodoList/>
        </div>
      </div>
    );
  }
}

export default App
