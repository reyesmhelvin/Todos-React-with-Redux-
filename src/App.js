import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Message from "./components/Message";
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todos</h1>
        </header>
        <Router>
          <div className="todo-app">
            <Message message="mhelvin reyes"/>
            <TodoForm/>
            <TodoList/>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App
