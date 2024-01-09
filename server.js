const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Hello Ryan!');
});

app.listen(port, () => {
  console.log(`Web server is listening at http://localhost:${port}`);
});
