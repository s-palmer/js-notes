const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const Notes = require('./notes')

const notePad =  new Notes();

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Please visit /notes and do not panic.')
})

app.get('/notes', function (req, res) {
  res.send(notePad.display());
  // console.log(notePad.display());
})

app.post('/notes', function (req, res) {
  res.json(req.body);
  notePad.newNote(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
