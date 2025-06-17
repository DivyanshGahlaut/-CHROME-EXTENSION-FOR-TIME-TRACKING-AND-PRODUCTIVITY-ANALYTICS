const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Root route (you already have this)
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// ✅ Add this /stats route
app.get('/stats', (req, res) => {
  res.json({
    productive: 5,
    unproductive: 2
  });
});

app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
