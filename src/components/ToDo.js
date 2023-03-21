import React from 'react';
import sx from './sx.js';

const ToDo = ({ todo, handleToggle }) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div 
            id={todo.id} 
            key={todo.id + todo.task} 
            name="todo" value={todo.id} 
            onClick={handleClick} 
            className={todo.complete ? "todo strike" : "todo"} 
            style={ todo.complete ? sx.completeItem : sx.todoItem}>
            {todo.task}
        </div>
    );
};

export default ToDo;