import React from 'react';
import ToDo from './ToDo';
import sx from './sx';

const ToDoList = ({todoList, handleToggle, handleFilter}) => {
    return (
        <div>
            <button style={sx.button} onClick={handleFilter}>Clear Completed</button>
            { todoList ? todoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} style={ todo.complete ? sx.completeItem : sx.todoItem}/>
                )
            }): null }

        </div>
    );
};

export default ToDoList;