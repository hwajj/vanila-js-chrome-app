const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TO_DO_THINGS_KEY = "todos";
console.log(todoInput);

let todoArr = [];

function submitHandler(event) {
  //event.preventDefault();
  const newTodo = todoInput.value;
  console.log(todoInput.value);
  let newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };

  paintTodoList(newTodoObj);
  todoArr.push(newTodoObj);
  saveStorage();
  //li를 제거할때 id를 가진 li 요소를 지우고싶으니까
  //id를 가진 object를 매개변수로 주되
  // 전역변수 todoArr 에 변동되는 toDo List에 대한 정보를 반영하고
  // local storage에 저장하는 함수는 매개변수 없이  todoArr를 바라보게함
  //local starage는 굳이 아이디 필요없이 todoList 키값과
  //to Do List 목록에 대한 text 배열 있으면됨~
}

function paintTodoList(toDosObj) {
  const li = document.createElement("li");
  const spann = document.createElement("span");
  const deleteBtn = document.createElement("button");
  li.id = toDosObj.id;
  li.appendChild(spann);
  li.appendChild(deleteBtn);
  // todoList.appendChild(deleteBtn);
  todoList.appendChild(li);

  spann.innerText = toDosObj.text;
  deleteBtn.innerText = "x";

  deleteBtn.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
  console.dir(event.target.parentElement);
  var li = event.target.parentElement;
  console.log(li);
  li.remove();
  console.log(todoArr);
  console.log(li.id);
  todoArr = todoArr.filter((itm) => itm.id != li.id);
  console.log(todoArr);
  saveStorage();
  //todoArr = todoArr.filter((toDo) => toDo.id != li.id);
  //console.log(todoArr);
  // save;
}

todoForm.addEventListener("submit", submitHandler);

function saveStorage() {
  console.log(localStorage.getItem(TO_DO_THINGS_KEY));
  localStorage.setItem(TO_DO_THINGS_KEY, JSON.stringify(todoArr));
}

const savedTodoList = localStorage.getItem(TO_DO_THINGS_KEY);
//Stringify된 arr로 나옴
console.log(savedTodoList);
//let tmpArr = JSON.parse(savedTodoList);
//tmpArr.forEach(paintTodoList);

//화면이 실행되지마자 이 페이지의 변수에 localstorage의 todoList 그려줌
if (savedTodoList != null) {
  todoArr = JSON.parse(localStorage.getItem(TO_DO_THINGS_KEY));
  todoArr.forEach(paintTodoList);
}
