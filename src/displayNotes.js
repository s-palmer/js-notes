const displayNotes = (fetchedContent) => {
  noteEl = document.getElementById("displayNotes");
  noteEl.innerHTML = "";
  fetchedContent.forEach((object) => {
    let newA = document.createElement("a");
    let newNote = document.createElement("p");
    let postCount = document.querySelectorAll(".note").length;
    let noteContent = object["content"];
    newA.href = `/note/${postCount}`;
    newA.id = `a-note-${postCount + 1}`;
    // if (noteContent.length > 20)
    //   newNote.textContent = '* ' + noteContent.slice(0, 20) + '...';
    // else
    //   newNote.textContent = '* ' + object["content"];
    if (noteContent.length > 20)
      newA.textContent = "* " + noteContent.slice(0, 20) + "...";
    else newA.textContent = "* " + object["content"];
    newNote.className = "note";
    newNote.id = `note-${postCount + 1}`;
    newNote.appendChild(newA);
    noteEl = document.getElementById("displayNotes");
    noteEl.appendChild(newNote);
  });
};

module.exports = displayNotes;
