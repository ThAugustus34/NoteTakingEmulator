let notes = [];

function addNote() {
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();

    if (noteText) {
        notes.push(noteText);
        noteInput.value = '';
        renderNotes();
        saveNotes();
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
    saveNotes();
}

function renderNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';

    notes.forEach((note, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${note} 
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesList.appendChild(listItem);
    });
}

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        notes = JSON.parse(savedNotes);
        renderNotes();
    }
}

loadNotes(); // Application start
