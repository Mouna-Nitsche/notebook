/*
Alles in Englisch in jedem öffentlichem Projekt

User Story 
Was soll machbar sein? Was will ein User machen?
Welche Grundfunktionen soll es geben?

Notizen anzeigen
Ich brauche Notizen 
let notes = [];

Ich muss definieren wo sie anzuzeigen sind
--> wann werden sie angezeigt?

notizen hinzufügen
notizen lösen
notizen archivieren
global speichern 

*/

//I need notes
let notes = ["Banana", "rasen mähen", "Geschenk kaufen"];

//where to display them? In a Div via Ref
function renderNotes() {
    const contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        const note = notes[indexNote];
        contentRef.innerHTML += getNoteTemplate(note);
    }
}
//when to render/display? onload at the start

function getNoteTemplate(note) {
    return `<p>+ ${note}</p>`;
}

//Notizen hinzufügen
function addNote() {
    let noteInputRef = document.getElementById("note_inpute");
    let noteInput = noteInputRef.value;

    notes.push(noteInput);
    renderNotes();
    //eingabe speichern / den Notizen hinzufügen
    //eingabe anzeigen lassen
}
