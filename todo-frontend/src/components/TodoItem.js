import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete as DeleteIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <ListItem style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ListItemText
        primary={todo.title}
        secondary={todo.completed ? 'Completed' : 'Incomplete'}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      />
      <div>
        <IconButton onClick={() => toggleComplete(todo.id)}>
          <CheckCircleIcon color={todo.completed ? 'primary' : 'action'} />
        </IconButton>
        <IconButton onClick={() => removeTodo(todo.id)}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </div>
    </ListItem>
  );
};

export default TodoItem;
