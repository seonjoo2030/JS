const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HODDEIN_CLASSNAME = "hidden";

function onLoginSubmit(event)
{
    //preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다. 
    //첫 argument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
    //classList - contain("class name"), add(), remove() 기존 클래스 이름을 유지하면서 추가 이름 가능
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HODDEIN_CLASSNAME);
    
    if (username)
    {
        greeting.classList.remove(HODDEIN_CLASSNAME);
        //greeting.innerText = "Hello " + username;
        greeting.innerText = `Hello ${username}`;
    }
}

//function handleLinkClick(event)
//{
//    event.preventDefault();
//    console.dir(event);
    //alert("clicked!"); //링크의 기본 동작을 멈추게 함.
//}

// 굳이 click 이벤트를 감지하여 처리할 필요 없다.
// 이유는, html에서 form, input 태그에서 기능제공    
// js는 이벤트 발생 시, 함수에 event에 대한 object를 인자로 넘겨준다.
// addEventListener 매개변수의 함수는 브라우저가 실행시킨다. event 정보도 준다.
loginForm.addEventListener("submit", onLoginSubmit); 
//link.addEventListener("click", handleLinkClick);