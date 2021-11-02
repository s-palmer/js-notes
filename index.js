const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', function (req, res) {
  res.send('Please visit /notes and do not panic.')
})

app.get('/notes', function (req, res) {
  res.send('Hello, world')
})

app.post('/notes', function (req, res) {
  res.send('Post method of some sort')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})