/*
Everything in English in every public project

User Story:
What should be possible? What will a user do?

What basic functions should be available?

Display notes
I need notes
let Notes = [];

I need to define where they are
--> when they are displayed?

Add notes
Remove notes
Archive notes
Save globally

*/

//I need notes
let notes = ["Banana", "rasen mähen", "Geschenk kaufen"];

//where to display them? In a Div via Ref
function renderNotes() {
    const contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}
//when to render/display? onload at the start

function getNoteTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]} <button onclick="deleteNote(${indexNote})">x</button></p>`;
}

//Add notes
function addNote() {
    //Save input / Add to notes
    //Display input
    let noteInputRef = document.getElementById("note_input");
    let noteInput = noteInputRef.value;

    notes.push(noteInput);
    renderNotes();

    noteInputRef.value = "";
}

//welche Notiz muss gelöscht werden
//wann löschen
//beim button durücken, löschen
//anzeige Updaten

function deleteNote(indexNote) {
    notes.splice(indexNote, 1);
    renderNotes();
}
