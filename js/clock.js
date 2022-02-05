const clock = document.querySelector("#clock");

clock.innerText = "00:00";
let varrr = 0;
function sayHello() {
  varrr++;
  console.log(`hello + ${varrr}`);
}

//setInterval(sayHello, 4000);
//setTimeout(sayHello, 2000);

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0"); //2자가 안되면 0 앞쪽에 채움
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //새로고침 했을때에도 1초안기다리고 바로 보임
setInterval(getClock, 1000);
