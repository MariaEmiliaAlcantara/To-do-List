const form = document.getElementById("taskForm");
const taskList = document.getElementById("tasks");

form.onsubmit = function (e) {
  e.preventDefault();
  const inputField = document.getElementById("inputField");
  addTask(inputField.value);
  form.reset();
};

function addTask(input) {
  if (input == "") {
    button.setAttribute("disabled");
  }

  const taskContainer = document.createElement("div");
  const newTask = document.createElement("input");
  const newTaskLabel = document.createElement("label");
  const newTaskDescriptionNode = document.createTextNode(input);

  newTask.setAttribute("type", "checkbox");
  newTask.setAttribute("name", input);
  newTask.setAttribute("id", input);

  newTaskLabel.setAttribute("for", input);
  newTaskLabel.appendChild(newTaskDescriptionNode);

  taskContainer.classList.add("taskItem");
  taskContainer.appendChild(newTask);
  taskContainer.appendChild(newTaskLabel);

  taskList.appendChild(taskContainer);

  const button = getElementById("button");
}
