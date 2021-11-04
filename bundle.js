(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // noteCreate.js
  var require_noteCreate = __commonJS({
    "noteCreate.js"(exports, module) {
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

  // displayNotes.js
  var require_displayNotes = __commonJS({
    "displayNotes.js"(exports, module) {
      var displayNotes2 = (fetchedContent) => {
        noteEl = document.getElementById("displayNotes");
        noteEl.innerHTML = "";
        fetchedContent.forEach((object) => {
          let newNote = document.createElement("p");
          newNote.textContent = object["content"];
          newNote.className = "newNote";
          noteEl = document.getElementById("displayNotes");
          noteEl.appendChild(newNote);
        });
      };
      module.exports = displayNotes2;
    }
  });

  // getNotes.js
  var require_getNotes = __commonJS({
    "getNotes.js"(exports, module) {
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
  var displaybtn = document.querySelector("#noteDisplay");
  getNotes(displayNotes);
  createbtn.addEventListener("click", () => {
    noteCreate(input.value);
    getNotes(displayNotes);
    input.value = "";
  });
})();
