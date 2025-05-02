// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple route to test if the server is running
app.get('/test', (req, res) => {
  res.send('API is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Export app for testing if needed
