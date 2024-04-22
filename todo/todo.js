const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
  const newTaskText = newTaskInput.value;
  if (newTaskText) {
    const newTaskItem = document.createElement("li");
    newTaskItem.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      newTaskItem.classList.toggle("completed");
    });

    const taskText = document.createElement("span");
    taskText.textContent = newTaskText;
    taskText.classList.add("task-text");

    newTaskItem.appendChild(checkbox);
    newTaskItem.appendChild(taskText);
    taskList.appendChild(newTaskItem);

    newTaskInput.value = ""; 
  }
});
