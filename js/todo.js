const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

function paintToDo(newTodo)
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function onToDoSubmit(event)
{
    event.preventDefault();
    const newTodo = toDoInput.value;
    if (newTodo)
    {
        paintToDo(newTodo);
        toDoInput.value = "";
    }
}

toDoForm.addEventListener("submit", onToDoSubmit);