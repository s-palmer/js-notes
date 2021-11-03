const getNotes = (callback) => {
  fetch("http://localhost:3000/notes")
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
    callback(jsonData);
  });
}

module.exports = getNotes;
