// const displayNote = (fetchedContent) => {
//   noteEl = document.getElementById("displayNotes");
//   noteEl.innerHTML = "";
//   fetchedContent.forEach((object) => {
//     let newNote = document.createElement("p");
//     let postCount = document.querySelectorAll(".note").length;
//     let noteContent = object["content"];
//     let noteEl = document.getElementById("displayNotes");
//     newNote.textContent = "* " + noteContent;
//     newNote.className = "note";
//     newNote.id = `note-${postCount}`;
//     noteEl.appendChild(newNote);
//   });
// };

// module.exports = displayNote;