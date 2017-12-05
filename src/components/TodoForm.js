import React, {Component} from "react";
import {connect} from "react-redux"
import {updateCurrent, saveTodos} from '../reducers/todo';

class TodoForm extends Component {
    handleInputChange = (e) => {
        const value = e.target.value
        this.props.updateCurrent(value)    
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.saveTodos(this.props.currentTodo)
    }

    render() {
        const {currentTodo} = this.props
        
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                onChange={this.handleInputChange} 
                value={currentTodo}/>
            </form>
        )
    }
    
}

export default connect(
    (state) => ({currentTodo: state.currentTodo}),
    {updateCurrent, saveTodos}
)(TodoForm)