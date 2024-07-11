const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = 3004;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('\x1b[32m%s\x1b[0m', "DB Connected Successfully!!")
}).catch(err => {
    console.log('\x1b[31m%s\x1b[0m', "Connection Error", err)
});

require("./models/User");



app.use(require("./routes"));




// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
