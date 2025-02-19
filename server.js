const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

// Serve static files from the 'assets' directory
app.use(express.static(path.join(__dirname, "assets")));

// Route for the homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "html pages", "index.html"));
});

// Route for events page
app.get("/events", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "html pages", "Events.html"));
});

// Route for teams page
app.get("/teams", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "html pages", "Teams.html"));
});

// Route for tech page
app.get("/tech", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "html pages", "tech.html"));
});

// Catch-all route for 404 errors
app.use((req, res) => {
  res
    .status(404)
    .send("404 Not Found - The page you are looking for doesn't exist.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
