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
        // 배열의 요소 별로 함수 실행하게 해줌
        //forEach((item) => func(item)) 이렇게 함수를 실행할 수 있다.
        //forEach(func) 하고, function func(item){} 이런식으로 함수를 만들어서 호출하도록 가능하다.
        //item은 각 배열 요소다.
        parsedToDos.forEach(paintToDo); 
    }
}

function saveToDos()
{
    // localStorage에 배열을 문자열로 저장할 때, JSON.stringify() 함수를 사용한다.
    // 반대로 JSON.parse 로 문자열을 배열로 변환할 수 있다. 
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event)
{
    //event.target은 해당 element 를 가리키고, parentElement는 그 element의 부모를 가리킨다.
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo)
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newTodo;
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

    if (newTodo)
    {
        toDos.push(newTodo); // 배열에 추가.
        paintToDo(newTodo);
        saveToDos();
        toDoInput.value = "";
    }
}

loadToDos();
toDoForm.addEventListener("submit", onToDoSubmit);
