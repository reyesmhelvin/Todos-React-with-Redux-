import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
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
            <Route path='/:filter?' render={({match}) => (
              <TodoList filter={match.params.filter}/>
            )}/>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App
