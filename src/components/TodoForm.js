import React from "react";

export default (props) => {
    const {currentTodo, changeCurrent} = props
    const handleInputChange = (e) => {
        const value = e.target.value
        changeCurrent(value)
    }
    return (
        <form>
            <input 
            type="text"
            onChange={handleInputChange} 
            value={currentTodo}/>
        </form>
    )
}