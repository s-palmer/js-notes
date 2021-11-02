class Notes {
  constructor() {
    this.notes = [];
  }

  newNote(note) {
    this.notes.push(note);
  }

  display() {
  //   this.notes.forEach(x =>
  //      {console.log(x.title)}
  //   );
  let i=0;
  for (i; i<this.notes.length; i++){
    return `${this.notes[i].title}: ${this.notes[i].content}`
  }
 }
}

module.exports = Notes