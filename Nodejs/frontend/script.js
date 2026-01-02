async function submit() {
    const text = document.getElementById("noteText").value;
    let notesList = document.getElementById("notes");

    if (!text) 
        return;

    const url = "http://localhost:3000/api/notes";
    const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({text: text})
    });
    
    if (!response.ok) 
        return;

    console.log("Request completed: " + response.status);
    const note = await response.json();
    console.log("New note: " + JSON.stringify(note));
    
    let newNote = document.createElement('li');
    newNote.innerText = note.text;
    notesList.appendChild(newNote);
    document.getElementById("noteText").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
    // Take over form submission
    const form = document.querySelector("#form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        submit();
    });
});

// This us run after page finish loading
async function init() {
    const res = await fetch("http://localhost:3000/api/notes");
    const notes = await res.json();

    let notesList = document.getElementById("notes");
    notes.forEach(note => {
        console.log(note);
        let newNote = document.createElement('li');
        newNote.innerText = note.text;
        notesList.appendChild(newNote);
    });
};

init();