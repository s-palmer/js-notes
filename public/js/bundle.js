(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/noteCreate.js
  var require_noteCreate = __commonJS({
    "src/noteCreate.js"(exports, module) {
      var noteCreate2 = (content) => {
        fetch("http://localhost:3000/notes", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ content })
        }).then((response) => response.json()).then((response) => {
          console.log(response);
        });
      };
      module.exports = noteCreate2;
    }
  });

  // src/displayNotes.js
  var require_displayNotes = __commonJS({
    "src/displayNotes.js"(exports, module) {
      var displayNotes2 = (fetchedContent) => {
        noteEl = document.getElementById("displayNotes");
        noteEl.innerHTML = "";
        fetchedContent.forEach((object) => {
          let newA = document.createElement("a");
          let newNote = document.createElement("p");
          let newButton = document.createElement("button");
          let postCount = document.querySelectorAll(".note").length;
          let noteContent = object["content"];
          let noteEl2 = document.getElementById("displayNotes");
          newA.href = `/note/${postCount}`;
          newA.id = `a-note-${postCount}`;
          if (noteContent.length > 20)
            newA.textContent = "* " + noteContent.slice(0, 20) + "...";
          else
            newA.textContent = "* " + object["content"];
          newNote.className = "note";
          newNote.id = `note-${postCount}`;
          newButton.className = "viewNoteButton";
          newButton.id = `${postCount}`;
          newButton.textContent = "View Note";
          newButton.setAttribute("onclick", `replyClick(${postCount})`);
          newNote.appendChild(newA);
          newNote.appendChild(newButton);
          noteEl2.appendChild(newNote);
        });
      };
      module.exports = displayNotes2;
    }
  });

  // src/getNotes.js
  var require_getNotes = __commonJS({
    "src/getNotes.js"(exports, module) {
      var getNotes2 = (callback) => {
        fetch("http://localhost:3000/notes").then((response) => response.json()).then((jsonData) => {
          console.log(jsonData);
          callback(jsonData);
        });
      };
      module.exports = getNotes2;
    }
  });

  // index.js
  var noteCreate = require_noteCreate();
  var displayNotes = require_displayNotes();
  var getNotes = require_getNotes();
  var input = document.querySelector("#noteInput");
  var createbtn = document.querySelector("#noteCreate");
  var viewNotesBtn = document.querySelector("#viewAllNotes");
  getNotes(displayNotes);
  createbtn.addEventListener("click", () => {
    noteCreate(input.value);
    getNotes(displayNotes);
    input.value = "";
  });
  viewNotesBtn.addEventListener("click", () => {
    getNotes(displayNotes);
  });
})();
