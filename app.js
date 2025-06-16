const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");
const taskList = document.getElementById("tasklist");
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    createTask(taskText);
    taskInput.value = "";
  }
});
function createTask(text) {
  const taskItem = document.createElement("li");
  taskItem.className = "list-group-item";
  taskItem.innerHTML = `<span>${text}</span> <button class="delete btn btn-sm">Delete</button>`;
  taskItem.querySelector(".delete").addEventListener("click", () => {
    taskItem.remove();
  });
  taskList.appendChild(taskItem);
}
clearBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});
