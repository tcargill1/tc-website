const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 8080; // Set the port to 8080
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/p1', (req, res) => {
    res.sendFile(__dirname + '/p1/index.html');
});

app.get('/p2', (req, res) => {
    res.sendFile(__dirname + '/p2/index.html');
});

app.get('/p3', (req, res) => {
    res.sendFile(__dirname + '/p3/index.html');
});

app.get('/p4', (req, res) => {
    res.sendFile(__dirname + '/p4/index.html');
});