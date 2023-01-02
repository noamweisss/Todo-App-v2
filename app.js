const newTaskInput = document.querySelector(".add-task__input").value;
const addTaskButton = document.querySelector(".add-task__button");

addTaskButton.addEventListener("click", (event) => {
  event.preventDefault();

  const newTaskInput = document.querySelector(".add-task__input").value;

  const newTask = document.createElement("div");
  newTask.className = "task";
  newTask.innerHTML = `
            <button class="task__btn">
                <i class="fas fa-check"></i>
            </button>

            <input
             type="text" 
             class="task__text" 
             value="${newTaskInput}" />

            <button class="task__edit">
                <i class="fas fa-edit"></i>
            </button>
            
            <button class="task__delete">
                <i class="fas fa-trash-alt"></i>
            </button>
  `;
  const taskList = document.querySelector(".task-list");

  taskList.appendChild(newTask);

  console.log("success");
  console.log(newTaskInput);
  // Add your code here
});
