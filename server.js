const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 6900;

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// PHP Handler (Assumes PHP is installed and in system PATH)
app.get('/*.php', (req, res) => {
    const phpFile = path.join(__dirname, req.path);
    exec(`php ${phpFile}`, (error, stdout, stderr) => {
        if (error) {
            res.status(500).send(`PHP Error: ${stderr}`);
            return;
        }
        res.send(stdout);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
