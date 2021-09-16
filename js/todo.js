const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");
let toDos = [];

function loadToDos()
{
    const savedToDos = localStorage.getItem("todos");

    if (null !== savedToDos)
    {
        const parsedToDos = JSON.parse(savedToDos);
    
        toDos = parsedToDos;    
        parsedToDos.forEach(paintToDo); 
    }
}

function saveToDos()
{
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event)
{
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 지우고자 하는 id와 동일하다면 false 반환
    saveToDos(); // 수정된 db 내용을 localstrage 에 저장.
    
}

function paintToDo(newTodo)
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newTodo.id; //li에 id 추가
    span.innerText = newTodo.text;
    button.innerText = "X";

    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function onToDoSubmit(event)
{
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    };
    if (newTodo)
    {
        toDos.push(newTodoObj); // 배열에 추가. object 추가로 변경
        paintToDo(newTodoObj);
        saveToDos();
        toDoInput.value = "";
    }
}

loadToDos();
toDoForm.addEventListener("submit", onToDoSubmit);
