import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {updateCurrent} from './reducers/todo';
import {bindActionCreators} from 'redux';

const action = bindActionCreators({updateCurrent}, store.dispatch)

ReactDOM.render(
<Provider store={store}>
    <App changeCurrent={action.updateCurrent}/>
</Provider>
, document.getElementById('root'));

registerServiceWorker();
