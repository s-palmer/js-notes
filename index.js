const noteCreate = require("./src/noteCreate");
const displayNotes = require("./src/displayNotes");
const getNotes = require("./src/getNotes");

const input = document.querySelector("#noteInput");
const createbtn = document.querySelector("#noteCreate");

getNotes(displayNotes);

createbtn.addEventListener("click", () => {
  noteCreate(input.value);
  getNotes(displayNotes);
  input.value = "";
});
