document.addEventListener('DOMContentLoaded', function () {
    const noteForm = document.getElementById('note-form');
    const noteInput = document.getElementById('note-input');
    const notesList = document.getElementById('notes-list');

    noteForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addNote();
    });

    function addNote() {
        const noteText = noteInput.value.trim();
        if (noteText !== '') {
            const li = document.createElement('li');
            li.textContent = noteText;
            notesList.appendChild(li);
            noteInput.value = '';
        }
    }
});
