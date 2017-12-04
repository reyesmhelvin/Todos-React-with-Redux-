import React from "react";
import {connect} from "react-redux"

const TodoItem = ({name, isComplete}) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete}/> {name}
    </li>
)

const TodoList = (props) => (
    <div className="todo-list">
        <ul>
            {props.todos.map(todo => < TodoItem {...todo} key={todo.id}/>)}
        </ul>
    </div>
)

export default connect(
    (state) => ({todos: state.todos})
)(TodoList)