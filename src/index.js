import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {updateCurrent} from './reducers/todo';
import {bindActionCreators} from 'redux';

const action = bindActionCreators({updateCurrent}, store.dispatch)

const todoChangeHandler = (val) => store.dispatch(updateCurrent(val))

const render = () => {
    const state = store.getState()
    ReactDOM.render(<App 
        todos={state.todos} 
        currentTodo={state.currentTodo}
        changeCurrent={action.updateCurrent}
        />, document.getElementById('root'));
}
render()

store.subscribe(render);

registerServiceWorker();
