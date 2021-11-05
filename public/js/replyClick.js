function replyClick(clickedId) {
    getNote(clickedId, displayNote
    );
}

const getNote = (clickedId, callback) => {
    fetch(`http://localhost:3000/notes/${clickedId}`)
    .then((response) => response.json())
    .then((jsonData) => {
      callback(jsonData);
    });
  }

const displayNote = (fetchedContent) => {
    let noteEl = document.getElementById("displayNotes");
    noteEl.innerHTML = "";
    let newNote = document.createElement("p");
    let postCount = document.querySelectorAll(".note").length;
    noteContent = fetchedContent["content"];
    newNote.textContent = "* " + noteContent;
    newNote.className = "note";
    newNote.id = `note-${postCount}`;
    noteEl.appendChild(newNote);
    };

// module.exports = replyClick;