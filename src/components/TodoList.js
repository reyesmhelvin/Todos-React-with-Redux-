import React, {Component} from "react";
import {connect} from "react-redux"
import {fetchTodos, toggleTodo, deleteTodo} from '../reducers/todo'

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
    <li>
        <span class="delete-item">
            <button onClick={() => deleteTodo(id)}>X</button>
        </span>
        <input type="checkbox" checked={isComplete} onChange={() => toggleTodo(id)}/> {name}
    </li>
)

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos()
    }   

   render() {
       return (
            <div className="todo-list">
                <ul>
                    {this.props.todos.map(todo => < TodoItem {...todo} 
                                                        key={todo.id} 
                                                        toggleTodo={this.props.toggleTodo} 
                                                        deleteTodo={this.props.deleteTodo}/>)
                    }
                </ul>
            </div>
        )
   } 
} 

export default connect(
    (state) => ({todos: state.todo.todos}),
    {fetchTodos, toggleTodo, deleteTodo}
)(TodoList)