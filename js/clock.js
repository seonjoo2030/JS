const clock = document.querySelector("h2#clock");

 function sayHallo()
{
    console.log("hello");
}

//setInterval(sayHallo, 5000); // 함수 명, 밀리 초 - interval 개념 
setTimeout(sayHallo, 5000);