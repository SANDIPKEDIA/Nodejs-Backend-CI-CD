const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 9000


app.get('/api', (req, res) => {
  res.send('Hello Once again Env changed');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
