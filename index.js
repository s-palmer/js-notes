const noteCreate = require('./noteCreate')

const input = document.querySelector('#noteInput');
const button = document.querySelector('#noteCreate');

button.addEventListener('click', () => {
  noteCreate(input.value);
})
