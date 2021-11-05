const displayNotes = (fetchedContent) => {
  noteEl = document.getElementById("displayNotes");
  noteEl.innerHTML = "";
  fetchedContent.forEach((object) => {
    let newA = document.createElement("a");
    let newNote = document.createElement("p");
    let newButton = document.createElement("button");
    let postCount = document.querySelectorAll(".note").length;
    let noteContent = object["content"];
    let noteEl = document.getElementById("displayNotes");
    newA.href = `/note/${postCount}`;
    newA.id = `a-note-${postCount}`;
    if (noteContent.length > 20)
      newA.textContent = "* " + noteContent.slice(0, 20) + "...";
    else newA.textContent = "* " + object["content"];
    newNote.className = "note";
    newNote.id = `note-${postCount}`;
    newButton.className = "viewNoteButton";
    newButton.id = `${postCount}`;
    newButton.textContent = 'View Note';
    newButton.setAttribute('onclick', `replyClick(${postCount})`);
    // newButton.setAttribute('onclick', `alert(${postCount})`);
    newNote.appendChild(newA);
    newNote.appendChild(newButton);
    noteEl.appendChild(newNote);
  });
};

module.exports = displayNotes;
