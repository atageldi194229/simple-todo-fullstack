const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Your existing setup and routes
app.use(express.json());

const todoRoutes = require('./routes/todo_routes.js');

app.use('/api', todoRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});