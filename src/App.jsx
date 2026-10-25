import './App.css';

function App() {
  const todoList = [
    { id: 1, title: "Review course materials" },
    { id: 2, title: "Set up development environment" },
    { id: 3, title: "Complete week 1 assignment" },
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;