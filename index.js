const noteCreate = require('./noteCreate')
const displayNotes = require('./displayNotes');
const getNotes = require('./getNotes');

const input = document.querySelector('#noteInput');
const createbtn = document.querySelector('#noteCreate');
const displaybtn = document.querySelector('#noteDisplay');


createbtn.addEventListener('click', () => {
  noteCreate(input.value);
})

displaybtn.addEventListener('click', () => {
  getNotes(displayNotes);
})

