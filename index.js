const noteCreate = require('./noteCreate')
const displayNotes = require('./displayNotes');
const getNotes = require('./getNotes');

const input = document.querySelector('#noteInput');
const createbtn = document.querySelector('#noteCreate');
const displaybtn = document.querySelector('#noteDisplay');

getNotes(displayNotes);

createbtn.addEventListener('click', () => {
  noteCreate(input.value);
  getNotes(displayNotes);
  input.value = "";
})

// displaybtn.addEventListener('click', () => {
//   getNotes(displayNotes);
// })

