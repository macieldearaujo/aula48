const task = document.querySelector('.js-list-task');
const taskInput = document.querySelector('.js-input-task');
const taskButton = document.querySelector('.js-button-task');

taskInput.addEventListener('input', () => {
    const taskInputValue = taskInput.value;

    if (taskInputValue.length >= 70) {
        createAlert('red');
    } else {
        createAlert('black');
    }
})

function createAlert(opacity) {
    const alert = document.querySelector('.caractere-alert');
    alert.innerText = `* Limite de caracteres: ${taskInput.value.length}/70`;
    alert.style.color = opacity;
}

document.addEventListener('keypress', (e) => {
    const taskInputValue = taskInput.value;
    const textInput = taskInput.value;

    if (taskInputValue.length > 0 && taskInputValue.length < 70 && e.key === 'Enter') {
        taskInput.value = '';
        createItem(textInput);
    };
})

document.addEventListener('click', (e) => {
    const taskInputValue = taskInput.value;
    const el = e.target;
    const textInput = taskInput.value;

    if (taskInputValue.length > 0 && taskInputValue.length < 70 && el.classList.contains('js-button-task')) {
        createItem(textInput);
        taskInput.value = '';
    }
    if (el.classList.contains('js-delete-task')) {
        el.parentElement.remove();
        saveTasks();
    }
})

function createItem(textInput) {
    const li = document.createElement('li');

    li.innerText = textInput;
    task.appendChild(li);
    createButton(li);
    saveTasks();
}

function createButton(li) {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Apagar'
    deleteButton.classList.add('js-delete-task', 'delete-task')
    li.appendChild(deleteButton);
}

function saveTasks() {
    const selectTasks = task.querySelectorAll('li');
    let arrayTasks = [];

    for (let t of selectTasks) {
        let t_text = t.innerText;
        t_text = t_text.replace("Apagar", "")
        arrayTasks.push(t_text);
    }
    console.log(arrayTasks);
    const tasksJSON = JSON.stringify(arrayTasks);
    localStorage.setItem('tasks', tasksJSON);
}

function getTask() {
    const task = JSON.parse(localStorage.getItem('tasks'));

    for (let t of task) {
        createItem(t)
    }
}

getTask();