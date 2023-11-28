const task = document.querySelector('.js-list-task');
const taskInput = document.querySelector('.js-input-task');
const taskButton = document.querySelector('.js-button-task');

enterListener();
clickListener();

taskInput.addEventListener('input', () => {
    const taskInputValue = taskInput.value;

    if (taskInputValue.length >= 70) {
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

function enterListener() {
    document.addEventListener('keypress', (e) => { 
        const taskInputValue = taskInput.value;
        if(taskInputValue.length > 0 && taskInputValue.length < 70 && e.key === 'Enter') createItem();
    })
}

function clickListener() {
    document.addEventListener('click', (e) => {
        const taskInputValue = taskInput.value;

        const el = e.target;
        if(taskInputValue.length > 0 && taskInputValue.length < 70 && el.classList.contains('js-button-task')) createItem();
    })
}

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