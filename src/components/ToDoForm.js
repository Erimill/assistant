import React, { useState } from 'react';
import sx from './sx.js';

const ToDoForm = ({ addTodo }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input style={sx.textbox} value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button style={sx.button}>Submit</button>
        </form>
    );
};

export default ToDoForm;