const displayNotes = (fetchedContent) => {
  // newDiv = document.createElement('div');
  // newDiv.setAttribute("id", "displayNotes");
  noteEl = document.getElementById("displayNotes")
  noteEl.innerHTML = "";
  fetchedContent.forEach((object) => {
    let newNote = document.createElement("p");
    newNote.textContent = object["content"];
    newNote.className = "newNote";
    noteEl = document.getElementById("displayNotes");
    noteEl.appendChild(newNote);
  });
};

module.exports = displayNotes;
