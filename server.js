const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

// Predefined email and password (for simplicity)
const predefinedEmail = 'user@example.com';
const predefinedPassword = 'password123';

app.get('/test', (req, res) => {
    res.send('API is running');
  });
  
// POST /login route to check credentials
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if email and password match the predefined ones
  if (email === predefinedEmail && password === predefinedPassword) {
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Export app for testing if needed
