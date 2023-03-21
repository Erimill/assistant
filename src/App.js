import { useState } from 'react';
import ToDoList from "./components/ToDoList";
import ToDoForm from './components/ToDoForm';
import { v4 as uuid } from 'uuid';
import sx from './components/sx.js';
import CountdownTimer from './components/countdown-timer';
import Notes from './components/notes';
function App() {
  const [todoList, setTodoList] = useState([]);
  const [content, setContent] = useState('');

  const handleToggle = (id) => {
    let mapped = todoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setTodoList(mapped);
  }

  const handleFilter = () => {
    let filtered = todoList.filter(task => {
      return !task.complete;
    });
    setTodoList(filtered);
  }

  const addTodo = (userInput) => {
    let copy = [...todoList];
    copy = [...copy, { key: uuid(), id: todoList.length + 1, task: userInput, complete: false }];
    setTodoList(copy);
  }

  return (
    <div className="App" style={sx.appMain}>
      <header className="App-header" style={sx.appHeader}>
        Assistant Page
      </header>
      <div classNmae="Todo-section" style={sx.todoSection}>
        <ToDoForm addTodo={addTodo} />
        <ToDoList todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      </div>
      <CountdownTimer seconds={0} />
      <Notes content={content} setContent={setContent}/>
    </div>
  );
}

export default App;

