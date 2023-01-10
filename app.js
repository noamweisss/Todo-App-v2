let newTaskInput = document.querySelector(".add-task__input").value;
const addTaskButton = document.querySelector(".add-task__button");

addTaskButton.addEventListener("click", (event) => {
  event.preventDefault();

  let newTaskInput = document.querySelector(".add-task__input").value;

  const newTask = document.createElement("div");
  newTask.className = "task";

  const checkButton = document.createElement("button");
  checkButton.className = "task__btn";

  const editButton = document.createElement("button");
  editButton.className = "task__edit";

  const deleteButton = document.createElement("button");
  deleteButton.className = "task__delete";
  
  const newTaskText = document.createElement("input");
  newTaskText.classList.add = "task__text";
  newTaskText.setAttribute("type", "text");
  newTaskText.setAttribute("readonly", "readonly");
  newTaskText.value = newTaskInput;

  checkButton.innerHTML = `
        <i class="fas fa-check" id="check"></i>`;
  editButton.innerHTML = `
        <i class="fas fa-edit"></i>`;
  deleteButton.innerHTML = `
        <i class="fas fa-trash-alt"></i>`;


  newTask.appendChild(checkButton);
  newTask.appendChild(newTaskText);
  newTask.appendChild(editButton);
  newTask.appendChild(deleteButton);

  
  const taskList = document.querySelector(".task-list");

  taskList.appendChild(newTask);

  document.querySelector(".add-task__input").value = "";


  console.log(newTaskInput);
  
  
});
