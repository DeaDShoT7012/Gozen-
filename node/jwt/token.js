const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./auth');
const { authenticateToken } = require('./tokenmiddleware');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
