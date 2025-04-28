const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000; // Same as real backend port for easy switching

app.use(cors());

app.get('/api/issues', (req, res) => {
  const issues = require('./mock_data/issues.json');
  res.json(issues);
});

app.listen(port, () => {
  console.log(`✅ Mock backend running at http://localhost:${port}`);
});
