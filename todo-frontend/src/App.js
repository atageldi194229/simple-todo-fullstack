import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos on mount
  useEffect(() => {
    axios.get('http://localhost:3000/api/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  /// Create todo
  const addTodo = (title) => {
    axios.post('http://localhost:3000/api/todos', { title, completed: false })
      .then(response => {
        setTodos([...todos, response.data]);
      })
      .catch(error => console.error('Error adding todo:', error));
  };

  /// Update todo
  const toggleComplete = (id) => {
    const todo = todos.find(t => t.id === id);
    axios.put(`http://localhost:3000/api/todos/${id}`, {
      ...todo,
      completed: !todo.completed
    })
      .then(response => {
        setTodos(todos.map(todo => todo.id === id ? response.data : todo));
      })
      .catch(error => console.error('Error updating todo:', error));
  };

  /// Remove todo
  const removeTodo = (id) => {
    axios.delete(`http://localhost:3000/api/todos/${id}`)
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => console.error('Error removing todo:', error));
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h2" style={{ margin: '20px 0' }}>Todo List</Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </Container>
    </div>
  );
}

export default App;
