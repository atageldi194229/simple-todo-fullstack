const express = require('express');
const router = express.Router();
const { Todo } = require('../models');

// Create a new Todo
router.post('/todos', async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json(todo);
});

// Get all Todos
router.get('/todos', async (req, res) => {
  const todos = await Todo.findAll();
  res.status(200).json(todos);
});

// Update a Todo
router.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.update(req.body, { where: { id } });
  const updatedTodo = await Todo.findByPk(id);
  res.status(200).json(updatedTodo);
});

// Delete a Todo
router.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.destroy({ where: { id } });
  res.status(204).send();
});

module.exports = router;