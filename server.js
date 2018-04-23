const express = require('express');

const app = express();

app.all('*', (req, res, next) => {
    next();
});

// Define Port
const port = 8080;

// Start the server
app.listen(port, () => {
    console.log('The magic happens at http://localhost:' + port);
});

module.exports = app;