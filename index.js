// Import stylesheets
import './style.css';

// Write Javascript code!
const addButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.querySelector('ul');
const previousValue = '';

function main() {
  addButton.addEventListener('click', () => {
    const task = taskInput.value;
    addTask(task);
  })
}

function addTask(task) {
  if (task && String(task).trim().length > 0) {
    if (previousValue !== task) {
      const newTask = document.createElement('li');
      const taskTextBox = document.createElement('input');
      const removeTaskIcon = document.createElement('span');
      removeTaskIcon.innerHTML = `
        <i class="far fa-trash-alt"></i>
      `;
      taskTextBox.value = task;
      newTask.append(taskTextBox);
      newTask.append(removeTaskIcon);
      taskList.append(newTask);
      previousValue = task;
    }
  }
}

main();