const noteCreate = (content) => {
  fetch("http://localhost:3000/notes", {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ content })
})
  .then(response => response.json())
  .then(response => {
    //callback goes here
  });
}

module.exports = noteCreate;
