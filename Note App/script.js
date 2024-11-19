const notesContainer = document.querySelector('.notes-container')
const createBtn = document.querySelector('.btn')
let notes = document.querySelectorAll('.input-box')

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes')
}


showNotes()

function updateStorage() {
    localStorage.setItem('notes',notesContainer.innerHTML)


}

createBtn.addEventListener('click',()=>{
    let inputbox = document.createElement('p');
    let img = document.createElement('img');
    inputbox.classList = 'input-box';
    inputbox.setAttribute('contenteditable','true');
    img.src = 'images/images.png';
    notesContainer.appendChild(inputbox).appendChild(img);
})

notesContainer.addEventListener('click',(e)=>{
if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove()
    updateStorage()
}
else if (e.target.tagName === 'P') {
    notes = document.querySelectorAll('.input-box')
    notes.forEach(nt =>{
        nt.onkeyup = function () {
            updateStorage() 
        }
        })
}
})
document.addEventListener('keydown', event =>{
    if (event.key === 'Enter') {
        document.execCommand('insertLineBreak')
        event.preventDefault()
    }
})