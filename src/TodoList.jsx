function TodoList() {
  const todoList = [
    { id: 1, title: 'Review course materials' },
    { id: 2, title: 'Set up development environment' },
    { id: 3, title: 'Complete week 2 assignment' },
  ];

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;