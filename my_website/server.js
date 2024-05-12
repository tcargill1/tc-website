/*const express = require('express');
const app = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
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
});*/

const express = require('express');
const app = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/p1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'p1', 'index.html'));
});

app.get('/p2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'p2', 'index.html'));
});

app.get('/p3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'p3', 'index.html'));
});

app.get('/p4', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'p4', 'index.html'));
});
