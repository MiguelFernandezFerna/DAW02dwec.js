/* Lista de Tareas Básica
    -Crea una aplicación de lista de tareas (to-do list).
    -Permite al usuario agregar tareas y marcar cada una como completada. Usa CSS para diferenciar las tareas completadas. */

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
    
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value;
    if (taskText === "") return;
    
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);

    taskItem.addEventListener("click", () => { //Se mete dentro porque a cada elemento <li> se le crea un eventListener que al clicar le dé la clase "completed"
        taskItem.classList.toggle("completed");
    });

    taskInput.value = "";
});
    