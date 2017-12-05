import {getTodos, createTodo} from '../lib/todoServices';
import {showMessage} from './messages'

const initState = {
    todos: [],
    currentTodo: ''
}

const CURRENT_UPDATE    = 'CURRENT_UPDATE';
const TODO_ADD          = 'TODO_ADD';
const TODO_LOAD         = 'TODO_LOAD';

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val});
export const loadTodos = (todos) => ({type: TODO_LOAD, payload: todos});
export const addTodos = (todo) => ({type: TODO_ADD, payload: todo});

export const fetchTodos = () => {
    return (dispatch) => {
        getTodos()
        .then(todos => dispatch(loadTodos(todos)));
    }
}

export const saveTodos = (name) => {
    return (dispatch) => {
        dispatch(showMessage('saving todo...'))
        createTodo(name)
        .then(res => dispatch(addTodos(res)))
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {...state, currentTodo: '', todos: state.todos.concat(action.payload)}
        case TODO_LOAD:
            return {...state, todos:  action.payload}
        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload}
        default: 
            return state; 
    } 
}   