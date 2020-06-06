// Import stylesheets
import './style.css';

// Write Javascript code!
const addButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');

function main() {
  addButton.addEventListener('click', () => {
    const task = taskInput.value;
    const taskList = document.querySelector('ul');
    const newTask = document.createElement('li');
    newTask.textContent = task;
    taskList.append(newTask);
  })
}

main();