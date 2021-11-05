const Notes = require('../src/notes')

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

describe ('.display', () => {
  it('displays a new note in a list',() => {
    notepad = new Notes();
    let note1 = {
      "title": "Groceries list",
      "content": "Tomatoes, yoghurt, honey, milk"
    };
    notepad.newNote(note1);
    expect(notepad.display()).toEqual([{"content": "Tomatoes, yoghurt, honey, milk", "title": "Groceries list"}]);
  });
})

describe ('.findNote', () => {
  it('returns a specific note based on an ID',() => {
    notepad = new Notes();
    let note1 = {
      "content": "Hello World"
    };
    notepad.newNote(note1);
    expect(notepad.findNote(0)).toEqual({"content": "Hello World"});
  });
})







