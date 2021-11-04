const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const Notes = require('./src/notes')
const notePad =  new Notes();

app.use(cors());
app.use(express.json());
app.use(express.static("./"));

app.get('/', function (req, res) {
  // res.send('Please visit /notes and do not panic.')
  res.render('index.html');
  // res.sendFile('index.html', {root : __dirname});
})

app.get('/notes', function (req, res) {
  res.send(notePad.display());
})

app.get('/notes/all', function (req, res) {
  // res.render('notes.html');
  res.sendFile('notes.html', {root : __dirname});
})

app.post('/notes', function (req, res) {
  res.json(req.body);
  notePad.newNote(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
