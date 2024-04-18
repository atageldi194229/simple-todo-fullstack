import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Add new todo"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Add Todo
      </Button>
    </form>
  );
};

export default TodoForm;