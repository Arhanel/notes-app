const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;


// Middleware to allow cross origin requests
app.use(cors());

// Middleware to parse JSON request bodies.
app.use(express.json());

let notes = [];

// This will be the first route. Its a GET on the root path.
app.get('/', (req, res) => {
    res.send(`Hello, this is a plain text response to the GET request on a localhost:${port}.`)
});

// This is the second GET route, this time on the /api/notes path.
app.get('/api/notes', (req, res) => {
    res.json(notes);
}); 

// POST route to add text to the array.
app.post('/api/notes', (req, res) => {
    notes.push(req.body);
    res.status(201).send(req.body);
    console.log(`Status: ${res.statusCode} + Content: ${JSON.stringify(req.body)}`);
});

// Start the server on a specified port
app.listen(port, () => {
    console.log(`My first node server is listening at http://localhost:${port}`);
});