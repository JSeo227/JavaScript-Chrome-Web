const login = document.querySelector("#login");
const name = document.querySelector("div#name input");
const password = document.querySelector("div#password input");

const logout = document.querySelector("#logout");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEYNAME = "username";
const USERNAME_KEYVALUE = name.value;
const USERPASSWORD_KEYVALUE = name.value;


function onLogIn(event) {
    event.preventDefault();
    login.classList.add(HIDDEN_CLASSNAME);
    // localStorage.setItem(keyName, keyValue);
    localStorage.setItem(USERNAME_KEYNAME, name.value);
    localStorage.setItem("userpassword", password.value);
    logout.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(name.value)
}

function onLogOut(event) {
    event.preventDefault();
    login.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    localStorage.clear();
}

function paintGreetings(username) {
    greeting.innerText = `${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    name.value = "";
    password.value = "";
}

// refresh
const savedUsername = localStorage.getItem(USERNAME_KEYNAME);

if (savedUsername === null) {
    login.classList.remove(HIDDEN_CLASSNAME);
    login.addEventListener("submit", onLogIn);
} else {
    login.classList.add(HIDDEN_CLASSNAME);
    logout.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername)
}

logout.addEventListener("click", onLogOut);