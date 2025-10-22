document.addEventListener("DOMContentLoaded", function() {

    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", addTask);
    taskList.addEventListener("click", handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Por favor, digite uma tarefa.");
            return;
        }

        const li = document.createElement("li");
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Excluir";
        deleteBtn.className = "delete-btn";

        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskInput.value = "";
    }

    function handleTaskClick(event) {
        const clickedElement = event.target;

        if (clickedElement.className === "delete-btn") {
            const li = clickedElement.parentElement; 
            taskList.removeChild(li); 
        }

        if (clickedElement.tagName === "SPAN" || clickedElement.tagName === "LI") {
            const li = clickedElement.closest('li');
            li.classList.toggle("completed"); 
        }
    }

});