class Notes {
  constructor() {
    this.notes = [];
  }

  newNote(note) {
    this.notes.push(note);
  }

  // display() {
  //   for (let i = 0; i < this.notes.length; i++) {
  //     // return `${this.notes[i].title}: ${this.notes[i].content}`
  //     return `${this.notes[i].content}`;
  //   }
  // }

  display() {
    return this.notes;
  }

  findNote(id) {
    return this.notes[id];
  }
}

module.exports = Notes;
