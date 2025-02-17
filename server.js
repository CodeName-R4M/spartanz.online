const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for events page
app.get('/Events.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Events.html'));
});

// Route for teams page
app.get('/Teams.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Teams.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
