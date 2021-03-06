const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const port = 3000;
const Notes = require('./src/notes')
const notePad =  new Notes();

app.use(cors());
app.use(express.json());
app.use("/public", express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.sendFile('index.html', {root : __dirname + '/public'});
})

app.get('/notes', function (req, res) {
  res.send(notePad.display());
})

app.get('/notes/all', function (req, res) {
  res.sendFile('notes.html', {root : __dirname + '/public'});
})

app.get('/notes/:noteId', function (req, res) {
  res.send(notePad.findNote(req.params.noteId));
  console.log(req.params);
  console.log("noteId is set to " + req.params.noteId);
  // res.sendFile('displayNote.html', {root : __dirname + '/public'});
})

app.get('/note/:noteId', function (req, res) {
  res.send(notePad.findNote(req.params.noteId).content);
  console.log(req.params);
  console.log("noteId is set to " + req.params.noteId);
  // res.sendFile('displayNote.html', {root : __dirname + '/public'});
})

app.post('/notes', function (req, res) {
  res.json(req.body);
  notePad.newNote(req.body);
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
