const displayNotes = (fetchedContent) => {
  // newDiv = document.createElement('div');
  // newDiv.setAttribute("id", "displayNotes");
  noteEl = document.getElementById("displayNotes")
  noteEl.innerHTML = "";
  fetchedContent.forEach((object) => {
    let newNote = document.createElement("p");
    let postCount = document.querySelectorAll('.note').length;
    newNote.textContent = '* ' + object["content"];
    newNote.className = "note";
    newNote.id = `note-${postCount + 1}`;
    noteEl = document.getElementById("displayNotes");
    noteEl.appendChild(newNote);
  });
};

module.exports = displayNotes;
