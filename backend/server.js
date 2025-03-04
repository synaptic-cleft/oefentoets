const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5050;

// Enable CORS
app.use(cors());
app.use(express.json()); // Middleware for JSON parsing

// ✅ MySQL Database Connection
const db = mysql.createConnection({
  host: 'db',           // Matches service name in docker-compose.yml
  user: 'cat_user',
  password: 'cat_pass',
  database: 'kattenasiel'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to MySQL database!");
  }
});

// Vulnerable Login Route (for testing SQL injection)
app.post('/administrator', (req, res) => {
  const { username, password } = req.body;

  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Query error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    
    // ja, deze check is een beetje arbitrair zodat je eerst de disabled moet aanpassen
    if (results.length > 0 && username=="admin") {
      res.json({ flag: "flagSQLinjection" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });
});

// Vulnerable endpoint accepting a URL as a query parameter
app.get('/fetch-data', async (req, res) => {
  const { url } = req.query; // Retrieve the URL from query string

  if (!url) {
    return res.status(400).send('URL parameter is required');
  }

  try {
    console.log(url);
    // SSRF vulnerability: The backend blindly makes a request to any URL provided
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching SSRF data');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
