const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HODDEIN_CLASSNAME = "hidden";
const USERNAME_KEY      = "username";

function paintGreetings(username)
{
    greeting.classList.remove(HODDEIN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

function onLoginSubmit(event)
{
    event.preventDefault();
    loginForm.classList.add(HODDEIN_CLASSNAME);
    
    if (loginInput.value)
    {
        localStorage.setItem(USERNAME_KEY, loginInput.value);
        paintGreetings(localStorage.getItem(USERNAME_KEY));
    }
}

if (null === localStorage.getItem(USERNAME_KEY))
{
    loginForm.classList.remove(HODDEIN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); 
}
else
{
    paintGreetings(localStorage.getItem(USERNAME_KEY));
}