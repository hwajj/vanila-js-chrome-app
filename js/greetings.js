const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string으로만 된 변수는 대문자로 된 변수명에 저장
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //새로고침 방지
  loginForm.classList.add(HIDDEN_CLASSNAME); //loginform hidden
  const username = loginInput.value; //입력한 이름 username에 저장
  localStorage.setItem(USERNAME_KEY, username); //localstorage에 저장
  paintGreetings(username);
}
//입력한 이름 표출하고 입력창 가리기
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
//console.log(savedUsername);
if (savedUsername === null) {
  //저장된게 없으면 가리는것 풀고 submit 이벤트리스너 걸어줌
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm[0].focus();
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //저장된게 있으면 paintGreeting 함수
  paintGreetings(savedUsername);
}
