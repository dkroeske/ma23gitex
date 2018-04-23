const express = require('express');

const app = express();

app.all('*', (req, res, next) => {
    next();
});

app.get('/hello', (req, res, next) => {
    res.status(200).json({
        'msg': 'Hello JEDI\'s'
    });
});

// Define Port
const port = process.env.PORT;

// Start the server
app.listen(port, () => {
    console.log('The server started @ http://localhost:' + port);
});

module.exports = app;

