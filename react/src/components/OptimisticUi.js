import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Master JavaScript' },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (!newTodo) return;

    const optimisticTodo = { id: Date.now(), text: newTodo };
    setTodos([...todos, optimisticTodo]);

    setTimeout(() => {

      console.log('Sending request to add todo:', optimisticTodo);


      console.log('Todo added successfully to server.');

    }, 1000);
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={handleChange} placeholder="Add new todo" />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
