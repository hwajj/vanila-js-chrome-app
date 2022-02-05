const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //같음
//const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

//localStorage에는 string만 저장가능하므로 JSON.stringify해서 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  //target - 어떤 버튼이 클릭되었는지 알려줌
  //parentElement - 부모요소
  //console.log(event.target); //<button>❌</button>
  //console.log(event.target.parentElement);
  //  <li id ="1643779617822">
  //    <span>sleep</span>
  //    <button>❌</button>
  //  </li>
  console.log(event.target.parentElement.innerText);
  //li 안쪽에 있는 Text는 span안의 text와 button안의 text 모두 ~> sleep❌ 나옴
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

//할일 갖고 to Do List에 그려주기
function paintToDo(newTodo) {
  //li 생성
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button"); //delete버튼
  button.innerText = "❌";
  //x버튼이 click 이벤트를 기다리고 있어야한다
  // (listener를 달고 있어야 누가 클릭하면 이벤트를 듣고 알아차릴수 있다
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //span을 li 안에
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault(); //새로고침 방지
  const newTodo = toDoInput.value; //to Do 변수에 저장
  toDoInput.value = ""; //toDo input 안의 내용 지움
  const newTodoObj = {
    //저장한 to Do 내용갖고 객체만듦
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //기존 toDos에 newTodo추가 저장
  console.log(toDos);
  paintToDo(newTodoObj);
  saveToDos(); //submit누르면 to Do list 저장하고 local에도 저장함
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

//새로고침할때마다 toDos가 사라지지 않도록 locolStorage에 저장된 값으로 paintToDo~ 표출
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //로컬에 저장된게 있으면  old toDos에 옮겨놔서 []를 로컬에 저장된 값으로 치환
  toDos = parsedToDos;
  //forEach는 array의 각각의 아이템에 대한 함수를 실행하게 함
  parsedToDos.forEach(paintToDo);
}
