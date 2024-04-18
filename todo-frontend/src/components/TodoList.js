import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;