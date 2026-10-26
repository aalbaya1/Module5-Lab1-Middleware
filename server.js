
const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

// Apply logger middleware
app.use(loggerMiddleware);

// Main route
app.get('/', (req, res) => {
    res.send('Module 5 Lab 1 - Middleware is working!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
