const task = document.querySelector('.js-task');
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
    // alert.innerText = '* Máximo de caracteres: 39';
    // alert.setAttribute('class', 'caractere-alert');
    // task.appendChild(alert);
}

document.addEventListener('click', (e) => {
    const el = e.target;

    if(el.classList.contains('js-button-task')) {
        console.log(taskInput.value);
    }
})