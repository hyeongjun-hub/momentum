const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
    //브라우저의 loval storage에 인자를 저장
}

function handleSubmit(event){
    event.preventDefault();
    //원래 submit하면 발생하는 이벤트를 제거
    const currentValue = input.value; 
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
    //submit 했을 때 handleSubmit함수를 호출
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    //form의 showing class를 지워 display를 none으로
    greeting.classList.add(SHOWING_CN);
    //greeting(h4)에 showing class 추가
    greeting.innerText = `Hello ${text}`;
    //greeting(h4)의 내부text를 헬로 + 인자로
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // currentUser가 localStorage에 없으면
        askForName();
    } else {
        // currentUser가 localStorage에 있으면
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();