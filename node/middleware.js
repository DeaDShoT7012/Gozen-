const express = require('express');
const app = express();
const port = 3000;

const logRequestDetails = (req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next(); 
};

app.use(logRequestDetails);

app.get('/', (req, res) => {
  res.send('Welcome to the Express.js server with custom middleware!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is your data with middleware logging!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
