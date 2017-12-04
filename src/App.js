import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todos</h1>
        </header>
        <div className="todo-app">
          <form>
            <input type="text"/>
          </form>
          <div className="todo-list">
            <ul>
              <li>
                <input type="checkbox"/> Create Static UI
              </li>
              <li>
                <input type="checkbox"/> Create Initial State
              </li>
              <li>
                <input type="checkbox"/> Use State To Render UI
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
