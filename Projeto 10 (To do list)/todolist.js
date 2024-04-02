const noteInput = document.querySelector("#noteInput")
const addNoteBtn = document.querySelector('#addNoteBtn')
const noteList = document.querySelector('#noteList')

addNoteBtn.addEventListener('click', function() {
    if (noteInput.value.trim() !== '') {
        const noteText = noteInput.value.trim()

        const li = document.createElement('li')
        li.textContent = noteText

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Excluir'
        deleteBtn.classList.add('delete')

        deleteBtn.addEventListener('click', function() {
            li.remove()
        });

        li.appendChild(deleteBtn)
        noteList.appendChild(li)

        noteInput.value = ''
    }
})