const task = document.querySelector('.js-list-task');
const taskInput = document.querySelector('.js-input-task');
const taskButton = document.querySelector('.js-button-task');

taskInput.addEventListener('input', () => {
    if (taskInput.value.length >= 70) {
        createAlert(1);
    } else {
        createAlert(0);
    }
})

function createAlert(opacity) {
    const alert = document.querySelector('.caractere-alert');
    alert.innerText = `* Limite de caracteres: ${taskInput.value.length}/70`;
    alert.style.opacity = opacity;
}

document.addEventListener('keypress', (e) => { 
    if(e.key === 'Enter') createItem();
})

document.addEventListener('click', (e) => {
    const el = e.target;

    if(el.classList.contains('js-button-task')) createItem();
})

function createItem() {
    const textInput = taskInput.value;
    const li = document.createElement('li');

    li.innerText = textInput;
    task.appendChild(li);
    createButton(li);
}

function createButton(li) {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Apagar'
    deleteButton.classList.add('js-delete-task', 'delete-task')
    li.appendChild(deleteButton);
}