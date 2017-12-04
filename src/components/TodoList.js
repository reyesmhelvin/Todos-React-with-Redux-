import React from "react";

const TodoItem = ({name, isComplete}) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete}/> {name}
    </li>
)

export default (props) => (
    <div className="todo-list">
        <ul>
            {props.todos.map(todo => < TodoItem {...todo} key={todo.id}/>)}
        </ul>
    </div>
)