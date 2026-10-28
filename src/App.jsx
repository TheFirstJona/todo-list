import { useState } from 'react';
import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';

const todos = [
  { id: 1, title: 'Review course materials' },
  { id: 2, title: 'Set up development environment' },
  { id: 3, title: 'Complete week3 assignment' },
];

function App() {
  const [todoList, setTodoList] = useState(todos);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;