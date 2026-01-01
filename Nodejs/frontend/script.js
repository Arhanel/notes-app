function submit() {
    console.log("OPEN");
    let text = document.getElementById("noteText").value;
    let notes = document.getElementById("notes");

    if (!text) {
        return;
    }
  
    console.log("TEXT" + text);
    console.log("NOTES" + notes);
    let newNote = document.createElement('li');
    newNote.innerText = text;
    notes.appendChild(newNote);

    console.log("END");
}

document.addEventListener("DOMContentLoaded", () => {
    // Take over form submission
    const form = document.querySelector("#userinfo");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        submit();
    });
});

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