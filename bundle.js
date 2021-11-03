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
        });
      };
      module.exports = noteCreate2;
    }
  });

  // index.js
  var noteCreate = require_noteCreate();
  var input = document.querySelector("#noteInput");
  var button = document.querySelector("#noteCreate");
  button.addEventListener("click", () => {
    noteCreate(input.value);
  });
})();
