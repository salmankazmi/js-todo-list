// Import stylesheets
import "./style.css";

const addButton = document.getElementById("add-task");
const taskInput = document.getElementById("task-input");

const previousValue = "";

let tasks = [];

function main() {
  addButton.addEventListener("click", () => {
    const task = taskInput.value;
    addTask(task);
  });
}

function addTask(task) {
  if (task && String(task).trim().length > 0) {
    if (previousValue !== task) {
      const taskObj = {
        id: 1,
        value: task,
        createdOn: new Date()
      };
      tasks.push(taskObj);
      renderTasks(taskObj);
      previousValue = task;
    }
  }
}

function renderTasks(task) {
  const taskList = document.querySelector("ul");
  const newTask = document.createElement("li");
  const taskTextBox = document.createElement("input");
  const removeTaskIcon = document.createElement("span");
  removeTaskIcon.innerHTML = `
        <i class="far fa-trash-alt"></i>
      `;
  removeTaskIcon.style.cursor = "pointer";
  removeTaskIcon.addEventListener("click", deleteTask.bind(null, task.id));
  taskTextBox.value = task.value;
  newTask.append(taskTextBox);
  newTask.append(removeTaskIcon);
  taskList.append(newTask);
}

const deleteTask = id => {
  debugger;
  let taskIndex = 0;
  for (const task of tasks) {
    if (task.id == id) {
      tasks.splice(taskIndex, 1);
      break;
    }
    taskIndex++;
  }

  const taskList = document.querySelector("ul");
  taskList.children[taskIndex].remove();
};

main();
