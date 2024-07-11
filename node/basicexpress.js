const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Express.js server!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello, this is your data!' });
});

app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received successfully', receivedData: data });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
