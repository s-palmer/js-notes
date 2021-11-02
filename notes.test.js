const Notes = require('./notes')

describe ('Notes', () => {
  it('creates a new note list', () => {
    notepad = new Notes();
    expect(notepad.notes).toEqual([]);
  })
})

describe ('.newNote', () => {
  it('adds a new note to the note list', () => {
    notepad = new Notes();
    let note1 = {
      "title": "Groceries list",
      "content": "Tomatoes, yoghurt, honey, milk"
    };
    notepad.newNote(note1);
    expect(notepad.notes).toEqual([{
      "title": "Groceries list",
      "content": "Tomatoes, yoghurt, honey, milk"
    }]);
  });
})