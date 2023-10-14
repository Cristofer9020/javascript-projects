const btnCreateNote = document.getElementById("btnCreateNote")
const notesContainer = document.querySelector(".notes-container")

btnCreateNote.addEventListener("click", () => {
    const newNote = document.createElement("textarea")
    newNote.classList.add("btnAndIpt", "note")
    newNote.placeholder = "Empty note"
    newNote.addEventListener("dblclick", () => {
        deleteNote(newNote)
    })
    notesContainer.prepend(newNote)
})

function deleteNote(note) {
    const alertBox = confirm("Do you want to delete this note?")
    alertBox ? note.remove() : note
}